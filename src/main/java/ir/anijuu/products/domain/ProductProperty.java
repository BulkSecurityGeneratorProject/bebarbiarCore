package ir.anijuu.products.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import ir.anijuu.products.domain.enumeration.PropertyType;

/**
 * A ProductProperty.
 */
@Entity
@Table(name = "product_property")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ProductProperty implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "identifier")
    private String identifier;

    @Enumerated(EnumType.STRING)
    @Column(name = "product_property_typetype")
    private PropertyType propertyType;

    @Column(name = "icon")
    private String icon;

    @ManyToOne
    private ProductPropertyCategory category;


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

    public String getIdentifier() {
        return identifier;
    }

    public void setIdentifier(String identifier) {
        this.identifier = identifier;
    }

    public PropertyType getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(PropertyType propertyType) {
        this.propertyType = propertyType;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public ProductPropertyCategory getCategory() {
        return category;
    }

    public void setCategory(ProductPropertyCategory productPropertyCategory) {
        this.category = productPropertyCategory;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ProductProperty productProperty = (ProductProperty) o;
        if(productProperty.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, productProperty.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ProductProperty{" +
            "id=" + id +
            ", title='" + title + "'" +
            ", identifier='" + identifier + "'" +
            ", propertyTypetype='" + propertyType + "'" +
            ", icon='" + icon + "'" +
            '}';
    }
}
