package ir.anijuu.products.web.rest.dto;

import ir.anijuu.products.domain.Product;
import ir.anijuu.products.domain.ProductStatus;
import ir.anijuu.products.domain.ProductType;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created by M_Bahrevar on 11/1/2016.
 */
public class ProductDTO {

    private Long id;
    private String title;
    private Integer price;
    private String image;
    private String duration;

    public ProductDTO(Product product) {
        this.id =product.getId();
        this.title = product.getTitle();
        price=product.getPrice();
        image=product.getIcon();
        duration=product.getDuration();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }
}
