package ir.anijuu.products.web.rest.farzad;

import com.codahale.metrics.annotation.Timed;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ir.anijuu.products.domain.*;
import ir.anijuu.products.domain.enumeration.ColorEnum;
import ir.anijuu.products.repository.*;
import ir.anijuu.products.utils.ConstantPool;
import ir.anijuu.products.web.rest.dto.ForgetPasswordDTO;
import ir.anijuu.products.web.rest.dto.ProductDTO;
import ir.anijuu.products.web.rest.dto.SearchDTO;
import ir.anijuu.products.web.rest.dto.SearchResultDTO;
import ir.anijuu.products.web.rest.dto.farzad.Query;
import ir.anijuu.products.web.rest.dto.farzad.ResultDTO;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api")
public class FarzadSearchService {

    @Inject
    private ProductRepository productRepository;
    @Inject
    private ProductPropertyValueRepository productPropertyValueRepository;
    @Inject
    private ProductTypeRepository productTypeRepository;
    @Inject
    private StateRepository stateRepository;
    @Inject
    private ProductTypeCategoryRepository productTypeCategoryRepository;
    @PersistenceContext
    private EntityManager em;



    @RequestMapping(value = "/1/productList", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> confirmReset(HttpServletResponse response) throws JsonProcessingException {

        List<Product> products = productRepository.findAll();
        List<ProductDTO> productDTOs = new ArrayList<>();
        products.forEach(product -> {
            productDTOs.add(new ProductDTO(product));
        });

        return ResponseEntity.ok(new ObjectMapper().writeValueAsString(productDTOs));
    }

    @RequestMapping(value = "/1/search", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> search(@Valid @RequestBody SearchDTO data, HttpServletResponse response) throws JsonProcessingException {

        List<Product> products = productRepository.findAll();
        List<ProductDTO> productDTOs = new ArrayList<>();
        products.forEach(product -> {
            productDTOs.add(new ProductDTO(product));
        });
        SearchResultDTO searchResultDTO = new SearchResultDTO();
        searchResultDTO.getFirstList().addAll(productDTOs.subList(0, products.size() / 2));
        searchResultDTO.getSecondList().addAll(productDTOs.subList(products.size() / 2, products.size()));

        return ResponseEntity.ok(new ObjectMapper().writeValueAsString(productDTOs));
    }


    private static double distance(double lat1, double lon1, double lat2, double lon2) {
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;

        return new BigDecimal(dist)
            .setScale(3, BigDecimal.ROUND_HALF_UP).stripTrailingZeros()
            .doubleValue();
    }

    private static double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    /*::	This function converts radians to decimal degrees						 :*/
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    private static double rad2deg(double rad) {
        return (rad * 180 / Math.PI);
    }

}
