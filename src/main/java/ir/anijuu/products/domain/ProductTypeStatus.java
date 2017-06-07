package ir.anijuu.products.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A ProductTypeStatus.
 */
@Entity
@Table(name = "product_type_status")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ProductTypeStatus implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "order_index")
    private Long orderIndex;

    @Column(name = "code")
    private String code;

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

    public Long getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Long orderIndex) {
        this.orderIndex = orderIndex;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ProductTypeStatus productTypeStatus = (ProductTypeStatus) o;
        if(productTypeStatus.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, productTypeStatus.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ProductTypeStatus{" +
            "id=" + id +
            ", title='" + title + "'" +
            ", orderIndex='" + orderIndex + "'" +
            ", code='" + code + "'" +
            '}';
    }

    public static class DEFAULT {
        public static String CREATE = "CREATE";
        public static String ACTIVE = "ACTIVE";
        public static String DEACTIVE = "DISABLE";
        public static String DELETED = "DELETED";
        public static String TOP_PRODUCT = "TOP_PRODUCT";
        public static String TOP_SHOP = "TOP_SHOP";
    }
}
