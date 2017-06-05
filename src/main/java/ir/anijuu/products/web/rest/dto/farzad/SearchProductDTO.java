package ir.anijuu.products.web.rest.dto.farzad;

import org.elasticsearch.common.geo.GeoPoint;

/**
 * Created by m_bahrevar on 11/15/2016.
 */
public class SearchProductDTO {
    public String title;
    public Shop shop;
    public String id;
    public String rating;
    public String distance;


    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Shop getShop() {
        return shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    private class Shop{
        public String name;
        public String address;
        public String logo;
        public GeoPoint location;

        public void setLocation(GeoPoint location) {
            this.location = location;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getLogo() {
            return logo;
        }

        public void setLogo(String logo) {
            this.logo = logo;
        }
    }
}

