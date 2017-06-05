package ir.anijuu.products.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A ProductDiscount.
 */
@Entity
@Table(name = "product_discount")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "productdiscount")
public class ProductDiscount implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "product_type_path")
    private String productTypePath;

    @NotNull
    @Column(name = "discount", nullable = false)
    private Float discount;

    @ManyToOne
    private Product product;

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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ProductDiscount productDiscount = (ProductDiscount) o;
        if(productDiscount.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, productDiscount.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ProductDiscount{" +
            "id=" + id +
            ", productTypePath='" + productTypePath + "'" +
            ", discount='" + discount + "'" +
            '}';
    }
}
