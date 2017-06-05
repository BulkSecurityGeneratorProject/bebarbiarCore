package ir.anijuu.products.service.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import ir.anijuu.products.domain.enumeration.PropertyType;

/**
 * A DTO for the ShopProperty entity.
 */
public class ShopPropertyDTO implements Serializable {

    private Long id;

    private PropertyType propertyType;

    private String title;

    private String identifier;

    private String icon;


    private Long shopPropertyCategoryId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public PropertyType getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(PropertyType propertyType) {
        this.propertyType = propertyType;
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
    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Long getShopPropertyCategoryId() {
        return shopPropertyCategoryId;
    }

    public void setShopPropertyCategoryId(Long shopPropertyCategoryId) {
        this.shopPropertyCategoryId = shopPropertyCategoryId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ShopPropertyDTO shopPropertyDTO = (ShopPropertyDTO) o;

        if ( ! Objects.equals(id, shopPropertyDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ShopPropertyDTO{" +
            "id=" + id +
            ", propertyType='" + propertyType + "'" +
            ", title='" + title + "'" +
            ", identifier='" + identifier + "'" +
            ", icon='" + icon + "'" +
            '}';
    }
}
