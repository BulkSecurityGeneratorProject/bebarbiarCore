package ir.anijuu.products.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A ProductStatusHistory.
 */
@Entity
@Table(name = "product_status_history")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "productstatushistory")
public class ProductStatusHistory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "create_date_time")
    private ZonedDateTime createDateTime;

    @ManyToOne
    private Product product;

    @ManyToOne
    private ProductStatus status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getCreateDateTime() {
        return createDateTime;
    }

    public void setCreateDateTime(ZonedDateTime createDateTime) {
        this.createDateTime = createDateTime;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public ProductStatus getStatus() {
        return status;
    }

    public void setStatus(ProductStatus productStatus) {
        this.status = productStatus;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ProductStatusHistory productStatusHistory = (ProductStatusHistory) o;
        if(productStatusHistory.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, productStatusHistory.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ProductStatusHistory{" +
            "id=" + id +
            ", createDateTime='" + createDateTime + "'" +
            '}';
    }
}
