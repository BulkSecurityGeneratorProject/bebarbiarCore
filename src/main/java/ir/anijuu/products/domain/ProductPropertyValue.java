package ir.anijuu.products.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A ProductPropertyValue.
 */
@Entity
@NamedQueries({
    @NamedQuery(
        name = "ProductPropertyValue.cards",
        query = "select distinct p.value from ProductPropertyValue p where p.productProperty.id = ?1"
    )
})
@Table(name = "product_property_value")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ProductPropertyValue implements Serializable {
    public ProductPropertyValue() {
    }

    public ProductPropertyValue(Product product) {
        this.product = product;
    }

    public ProductPropertyValue(Product product, Long count) {
        this.product = product;
        this.count = count;
    }

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "value")
    private String value;

    @Column(name = "accepted")
    private Boolean accepted;

    @Column(name = "from_date_time")
    private ZonedDateTime fromDateTime;

    @Column(name = "to_date_time")
    private ZonedDateTime toDateTime;

    @ManyToOne
    private Product product;

    @ManyToOne
    private ProductProperty productProperty;

    @Transient
    private transient long count;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Boolean isAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

    public ZonedDateTime getFromDateTime() {
        return fromDateTime;
    }

    public void setFromDateTime(ZonedDateTime fromDateTime) {
        this.fromDateTime = fromDateTime;
    }

    public ZonedDateTime getToDateTime() {
        return toDateTime;
    }

    public void setToDateTime(ZonedDateTime toDateTime) {
        this.toDateTime = toDateTime;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public ProductProperty getProductProperty() {
        return productProperty;
    }

    public void setProductProperty(ProductProperty productProperty) {
        this.productProperty = productProperty;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ProductPropertyValue productPropertyValue = (ProductPropertyValue) o;
        if (productPropertyValue.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, productPropertyValue.id);
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ProductPropertyValue{" +
            "id=" + id +
            ", value='" + value + "'" +
            ", accepted='" + accepted + "'" +
            ", fromDateTime='" + fromDateTime + "'" +
            ", toDateTime='" + toDateTime + "'" +
            '}';
    }
}
