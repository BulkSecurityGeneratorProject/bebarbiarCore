package ir.anijuu.products.web.rest.farzad;

import com.codahale.metrics.annotation.Timed;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ir.anijuu.products.domain.Product;
import ir.anijuu.products.domain.User;
import ir.anijuu.products.domain.UserRate;
import ir.anijuu.products.repository.*;
import ir.anijuu.products.security.SecurityUtils;
import ir.anijuu.products.utils.CalendarUtil;
import ir.anijuu.products.web.rest.dto.farzad.DetailDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FarzaDetailService {

    @Inject
    private ProductRepository productRepository;
    @Inject
    private UserRepository userRepository;
    @Inject
    private UserRateRepository userRateRepository;
    @Inject
    private ProductTypeRepository productTypeRepository;
    @Inject
    private CommentRepository commentRepository;

    @RequestMapping(value = "/1/detail", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> detail(@Valid @RequestBody String id, HttpServletResponse response) {

        try {
            Product product = productRepository.findById(Long.valueOf(id));
            product.setView(product.getView() + 1);
            return ResponseEntity.ok(new ObjectMapper().writeValueAsString(getProductDetail(product)));
        } catch (
            AuthenticationException exception
            )

        {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", exception.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        } catch (
            JsonProcessingException e
            )

        {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", e.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        }
    }


    @RequestMapping(value = "/products/detail/{id}", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> detailByHash(@Valid @RequestBody String id, HttpServletResponse response) {

        try {
            Product product = productRepository.
                findByHashId(id);
            if (product == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            DetailDTO detailDTO = getProductDetail(product);
            return ResponseEntity.ok(new ObjectMapper().writeValueAsString(detailDTO));
        } catch (AuthenticationException exception)

        {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", exception.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        } catch (JsonProcessingException e)

        {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", e.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        }
    }

    public DetailDTO getProductDetail(Product product) {

        DetailDTO detailDTO = new DetailDTO();
        detailDTO.product = new DetailDTO.Product();

        detailDTO.product.id = product.getId().toString();
        List<String> images = new ArrayList<>();
        images.add(product.getIcon());
        detailDTO.product.images = images;
        detailDTO.product.desc = product.getDescription();
        detailDTO.product.price = String.valueOf(product.getPrice());
        detailDTO.product.title = product.getTitle();
        detailDTO.product.period = product.getDuration();
        detailDTO.product.adr = product.getAddress();
        detailDTO.product.view = product.getView();
        //todo calculate
        detailDTO.product.pastTime = product.getLastModifiedDate() == null ? product.getCreatedDate().toString() : product.getLastModifiedDate().toString();
        return detailDTO;
    }

    @RequestMapping(value = "/1/addProduct", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> addProduct(@Valid @RequestBody DetailDTO detailDTO, HttpServletResponse response) {

        return ResponseEntity.ok("200");
    }


    @RequestMapping(value = "/1/rating", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> rating(@Valid @RequestBody String param, HttpServletResponse response) {
        String[] s = param.split(",");
        Product product = productRepository.findById(Long.parseLong(s[0]));
        User user = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin()).get();
        UserRate userRate = userRateRepository.findByUserAndProduct(user, product);
        if (userRate != null) {
            userRateRepository.delete(userRate);
        }

        userRate = new UserRate();
        userRate.setDateOfRate(CalendarUtil.getNowDateTimeOfIran());
        userRate.setProduct(product);
        userRate.setUser(user);
        userRate.setValue(s[1]);
        userRateRepository.save(userRate);
        List<UserRate> userRates = userRateRepository.findByProduct(product);
        int sum = 0;
        if (userRates != null) {
            for (UserRate rate : userRates) {
                sum += Integer.valueOf(rate.getValue());
            }
        }
        long count = userRateRepository.countByProduct(product);
        product.setAverageTrust((double) ((sum) / count));
        productRepository.save(product);

        return ResponseEntity.ok("200");

    }

}
