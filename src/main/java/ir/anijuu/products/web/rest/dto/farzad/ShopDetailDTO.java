package ir.anijuu.products.web.rest.dto.farzad;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by farzad on 4/30/16.
 */
public class ShopDetailDTO implements Serializable{

    public List<Product> products= new ArrayList<>();
    public int count;
    public long commentCount;
    public boolean sponsor;
    public String banner;
    public String pin;
    public String id;
    public Audio audio;
    public Video video;
    public List<Image> image;
    public String shareHash;
    public String shopName;
    public String shopLogo;
    public String lat;
    public String lon;
    public  List<Property> shopProperties= new ArrayList<>();
    public static class Product implements Serializable{
        public String title;
        public String shopName;
        public String address;
        public String logo;
        public String id;
        public String rating;
        public String color;
        public   String latitude;
        public  String longitude;
        public  String distance;



    }
    public  static class Image implements Serializable {

        public String src;
    }
    public  static class Video implements Serializable {

        public String src;
        public String poster;
    }  public  static class Audio implements Serializable {

        public String src;
        public String poster;
    }
    public  static class Property implements Serializable {
        public   String key;
        public   String value;
        public   String icon;
        public   String description;

    }


}

