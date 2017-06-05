package ir.anijuu.products.web.rest.dto.farzad;

import java.io.Serializable;

public class ProductWrapper implements Serializable {
    public String title;
    public Long id;
    public Double  rating;

    public ProductWrapper() {
    }

    public ProductWrapper(String title, Long id, Double rating) {
        this.title = title;
        this.id = id;
        this.rating = rating;
    }
}
