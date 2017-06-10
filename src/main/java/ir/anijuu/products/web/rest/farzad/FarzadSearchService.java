package ir.anijuu.products.web.rest.farzad;

import com.codahale.metrics.annotation.Timed;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ir.anijuu.products.domain.Product;
import ir.anijuu.products.repository.*;
import ir.anijuu.products.web.rest.dto.ProductDTO;
import ir.anijuu.products.web.rest.dto.SearchDTO;
import ir.anijuu.products.web.rest.dto.SearchResultDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

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

    public ResponseEntity<?> productList(HttpServletResponse response) throws JsonProcessingException {

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

        return ResponseEntity.ok(new ObjectMapper().writeValueAsString(searchResultDTO));
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
