package ir.anijuu.products.web.rest.dto.farzad;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by farzad on 4/30/16.
 */
public class ResultDTO implements Serializable {

    public List<Product> products = new ArrayList<>();
    public int count;
    public boolean sponsor;
    public String banner;
    public boolean isShop = false;

    public static class Product implements Serializable {
        public String title;
        public String shopName;
        public String address;
        public String logo;
        public String pin;
        public String color;
        public String catId;
        public String id;
        public String rating;
        public String latitude;
        public String longitude;
        public String distance;
//        public  List<Property> properties;


    }

    public static class Property implements Serializable {
        public String key;
        public String values;

    }


}

