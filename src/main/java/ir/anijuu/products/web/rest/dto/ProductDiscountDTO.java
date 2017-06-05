package ir.anijuu.products.web.rest.dto;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;


/**
 * A DTO for the ProductDiscount entity.
 */
public class ProductDiscountDTO implements Serializable {

    private Long id;

    private String productTypePath;

    @NotNull
    private Float discount;


    private Long productId;
    

    private String productTitle;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getProductTypePath() {
        return productTypePath;
    }

    public void setProductTypePath(String productTypePath) {
        this.productTypePath = productTypePath;
    }
    public Float getDiscount() {
        return discount;
    }

    public void setDiscount(Float discount) {
        this.discount = discount;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }


    public String getProductTitle() {
        return productTitle;
    }

    public void setProductTitle(String productTitle) {
        this.productTitle = productTitle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ProductDiscountDTO productDiscountDTO = (ProductDiscountDTO) o;

        if ( ! Objects.equals(id, productDiscountDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ProductDiscountDTO{" +
            "id=" + id +
            ", productTypePath='" + productTypePath + "'" +
            ", discount='" + discount + "'" +
            '}';
    }
}
