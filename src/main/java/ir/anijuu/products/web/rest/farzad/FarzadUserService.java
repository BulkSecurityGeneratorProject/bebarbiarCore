package ir.anijuu.products.web.rest.farzad;

import com.codahale.metrics.annotation.Timed;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kavenegar.sdk.KavenegarApi;
import com.kavenegar.sdk.excepctions.ApiException;
import com.kavenegar.sdk.excepctions.HttpException;
import ir.anijuu.products.domain.*;
import ir.anijuu.products.domain.enumeration.*;
import ir.anijuu.products.repository.*;
import ir.anijuu.products.security.AuthoritiesConstants;
import ir.anijuu.products.security.SecurityUtils;
import ir.anijuu.products.security.jwt.JWTConfigurer;
import ir.anijuu.products.security.jwt.TokenProvider;
import ir.anijuu.products.service.UserService;
import ir.anijuu.products.utils.CalendarUtil;
import ir.anijuu.products.utils.ConstantPool;
import ir.anijuu.products.utils.QRCodeUtil;
import ir.anijuu.products.web.rest.dto.*;
import ir.anijuu.products.web.rest.dto.farzad.*;
import ir.anijuu.products.web.rest.dto.farzad.UserDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.text.DecimalFormat;
import java.util.*;

@RestController
@RequestMapping("/api")
public class FarzadUserService {

    @Inject
    private TokenProvider tokenProvider;
    @Inject
    private PropositionRepository propositionRepository;
    @Inject
    private PasswordEncoder passwordEncoder;
    @Inject
    private RateInfoRepository rateInfoRepository;
    @Inject
    private AuthorityRepository authorityRepository;
    @Inject
    private StartupModalRepository startupModalRepository;
    @Inject
    private AuthenticationManager authenticationManager;
    @Inject
    private UserRepository userRepository;
    @Inject
    private UserService userService;
    @Inject
    private ProductRepository productRepository;
    @Inject
    private ProductTypeCategoryRepository productTypeCategoryRepository;
    @PersistenceContext
    private EntityManager em;

    @RequestMapping(value = "/1/user_authenticate", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> authorize(@Valid @RequestBody LoginDTO loginDTO, HttpServletResponse response) {

        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());

        try {
            UserDTO userDTO = new UserDTO();
            Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
            if (authentication.isAuthenticated()) {
                User user = userRepository.findOneByLogin(loginDTO.getUsername()).get();
                userDTO.setName(user.getName());
                userDTO.setMobile(user.getTel());
                userDTO.setPassword(loginDTO.getPassword());
                userDTO.setPicture(user.getPic());
            }
            SecurityContextHolder.getContext().setAuthentication(authentication);
//            boolean rememberMe = (loginDTO.isRememberMe() == null) ? false : loginDTO.isRememberMe();
            String jwt = tokenProvider.createToken(authentication, true);
            response.addHeader(JWTConfigurer.AUTHORIZATION_HEADER, "Bearer " + jwt);
            userDTO.setToken(jwt);


            return ResponseEntity.ok(new ObjectMapper().writeValueAsString(userDTO));
        } catch (AuthenticationException exception) {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", exception.getLocalizedMessage()), HttpStatus.UNAUTHORIZED);
        } catch (JsonProcessingException e) {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", e.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        }
    }


    @RequestMapping(value = "/1/rent", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> rent(@Valid @RequestBody String id, HttpServletResponse response) {

        try {
            Product product = productRepository.findById(Long.valueOf(id));
//            product.setStatus();//change status
        } catch (
            AuthenticationException exception
            )

        {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", exception.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok("200");

    }
 @RequestMapping(value = "/1/available", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> available(@Valid @RequestBody String id, HttpServletResponse response) {

        try {
            Product product = productRepository.findById(Long.valueOf(id));
//            product.setStatus();//change status
        } catch (
            AuthenticationException exception
            )

        {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", exception.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        }
       return ResponseEntity.ok("200");
    }

    @RequestMapping(value = "/1/signup", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> signUp(@Valid @RequestBody UserDTO userDTO, HttpServletResponse response) {


        User user = new User();
//        user.setLogin(userDTO.getUsername());
        user.setLogin(userDTO.getUsername());
        user.setActivated(true);
        user.setCreatedBy("system");
        Set<Authority> authoritie = new HashSet<>();
        authoritie.add(authorityRepository.findOne(AuthoritiesConstants.USER));
        user.setAuthorities(authoritie);
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setName(userDTO.getName());
        user.setTel(userDTO.getMobile());
        userRepository.save(user);
        user.setHashId(Integer.toHexString((System.identityHashCode(user.getId()))).toUpperCase());
        userRepository.save(user);
        return ResponseEntity.ok("200");
    }

    @RequestMapping(value = "/1/myProducts", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> myProducts(@Valid @RequestBody String data, HttpServletResponse response) throws JsonProcessingException {

        List<Product> products = productRepository.findAll();
        List<ProductDTO> productDTOs = new ArrayList<>();
        products.forEach(product -> {
            productDTOs.add(new ProductDTO(product));
        });
        SearchResultDTO searchResultDTO = new SearchResultDTO();
        searchResultDTO.getFirstList().addAll(productDTOs.subList(0, products.size() / 2));
        searchResultDTO.getSecondList().addAll(productDTOs.subList(products.size() / 2, products.size()));
        return ResponseEntity.ok(new ObjectMapper().writeValueAsString(searchResultDTO));
    }

    @RequestMapping(value = "/1/forget", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> forget(@Valid @RequestBody String username, HttpServletResponse response) {
        //todo forget scenario send email or sms
        Optional<User> user = userRepository.findOneByLogin(username);
        if (user.isPresent()) {

            int START = 1000;
            int END = 9999;
            Random random = new Random();
            long range = END - START + 1;
            // compute a fraction of the range, 0 <= frac < range
            long fraction = (long) (range * random.nextDouble());
            int randomNumber = (int) (fraction + START);
            String s = String.valueOf(randomNumber);
            User user1 = user.get();
            user1.setResetKey(s);
            user1.setResetDate(CalendarUtil.getNowDateTimeOfIran());
            userRepository.save(user1);
            try {
                String tel = user1.getTel();
                KavenegarApi api = new KavenegarApi("5635717141617A52534F636F49546D38454E647870773D3D");
//                api.send("10006006606600", tel, "شماره بازیابی :  " + s);

                api.verifyLookup(tel, s, "restore");

            } catch (HttpException ex) { // در صورتی که خروجی وب سرویس 200 نباشد این خطارخ می دهد.
                System.out.print("HttpException  : " + ex.getMessage());
                return ResponseEntity.ok("302");
            } catch (ApiException ex) { // در صورتی که خروجی وب سرویس 200 نباشد این خطارخ می دهد.
                System.out.print("ApiException : " + ex.getMessage());
                return ResponseEntity.ok("302");
            }
//            MailUtils.sendEmail("farzad.sedaghatbin@gmail.com", s, "ResetPassword");
            return ResponseEntity.ok("200");
        } else {
            return ResponseEntity.ok("201");
        }
    }

    @RequestMapping(value = "/1/editUser", method = RequestMethod.POST)

    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> editUser(@Valid @RequestBody EditUserDTO user, HttpServletResponse response) {
        Optional<User> u = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin());
        if (u.isPresent()) {
            u.get().setName(user.getName());
            u.get().setTel(user.getTel());

            userRepository.save(u.get());
            return ResponseEntity.ok("200");
        } else {
            return ResponseEntity.ok("201");
        }
    }

    @RequestMapping(value = "/1/confirmReset", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> confirmReset(@Valid @RequestBody ForgetPasswordDTO data, HttpServletResponse response) {
        Optional<User> user = userRepository.findOneByResetKey(data.getCode());
        if (user.isPresent()) {
            User user1 = user.get();
            user1.setPassword(passwordEncoder.encode(data.getPassword()));
            user1.setResetDate(CalendarUtil.getNowDateTimeOfIran());
            userRepository.save(user1);
            return ResponseEntity.ok("200");
        } else {
            return ResponseEntity.ok("201");
        }
    }


    @RequestMapping(value = "/1/changePassword", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> changePassword(@Valid @RequestBody String password, HttpServletResponse response) {
        User user1 = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin()).get();
        user1.setPassword(passwordEncoder.encode(password));
        userRepository.save(user1);
        return ResponseEntity.ok("200");
    }


    @RequestMapping(value = "/1/deviceToken", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> deviceToken(@Valid @RequestBody String token, HttpServletResponse response) {
        User user = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin()).get();
        user.setPushSessionKey(token);
        userRepository.save(user);
        List<StartupModal> startupModals = startupModalRepository.findAll();

        RateInfo r = rateInfoRepository.findById(2l);
        if (startupModals.size() > 0) {
            StartupModal startupModal = startupModals.get(0);
            startupModal.setVersion(r.getRate());
            try {
                return ResponseEntity.ok(new ObjectMapper().writeValueAsString(startupModal));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }

        try {
            return ResponseEntity.ok(new ObjectMapper().writeValueAsString(new StartupModal(r.getRate())));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok("200");
    }

    @RequestMapping(value = "/1/contactUs", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> contactUs(@Valid @RequestBody ContactUsDTO user, HttpServletResponse response) {
        Proposition proposition = new Proposition();
        proposition.setDescription(user.getDescription());
        if (user.getTitle().equalsIgnoreCase("OFFER")) {
            proposition.setPropositionType(PropositionType.OFFER);
        } else if (user.getTitle().equalsIgnoreCase("COOPERATION")) {
            proposition.setPropositionType(PropositionType.COOPERATION);
        } else {
            proposition.setPropositionType(PropositionType.CRITICISM);
        }
        propositionRepository.save(proposition);
        return ResponseEntity.ok("200");
    }


    @RequestMapping(value = "/1/uploadUserPic", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> uploadUserPic(@Valid @RequestBody String pic, HttpServletResponse response) {
        //todo set user pic
        User user = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin()).get();

        user.setPic(pic);
        userRepository.save(user);
        return ResponseEntity.ok("200");
    }

}
