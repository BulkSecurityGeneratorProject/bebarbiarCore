package ir.anijuu.products.web.rest.dto.farzad;

import java.io.Serializable;
import java.util.List;

/**
 * Created by farzad on 4/30/16.
 */
public class DetailDTO implements Serializable{

    public Product product = new Product();

    public static class Product implements Serializable{
        public String title;
        public String price;
        public String description;
        public String address;
        public List<String> image;
        public String id;
        public Long catId;
        public String duration;
        public String pastTime;


    }


}

