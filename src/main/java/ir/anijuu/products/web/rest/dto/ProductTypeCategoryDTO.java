package ir.anijuu.products.web.rest.dto;

import ir.anijuu.products.domain.ProductTypeCategory;
import ir.anijuu.products.domain.ProductTypeStatus;

import java.util.Objects;

/**
 * Created by M_Bahrevar on 7/20/2016.
 */


public class ProductTypeCategoryDTO  {

    private Long id;
    private String title;
    private String description;
    private String color;
    private Integer orderIndex;
    private byte[] iconImage;
    private ProductTypeStatus status;
    private Long parent;
    private String path;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Integer orderIndex) {
        this.orderIndex = orderIndex;
    }

    public byte[] getIconImage() {
        return iconImage;
    }

    public void setIconImage(byte[] iconImage) {
        this.iconImage = iconImage;
    }

    public ProductTypeStatus getStatus() {
        return status;
    }

    public void setStatus(ProductTypeStatus status) {
        this.status = status;
    }

    public Long getParent() {
        return parent;
    }

    public ProductTypeCategoryDTO() {
    }

    public ProductTypeCategoryDTO(ProductTypeCategory productTypeCategory) {
        this.id = productTypeCategory.getId();
        this.title = productTypeCategory.getTitle();
        this.description = productTypeCategory.getDescription();
        this.color = productTypeCategory.getColor();
        this.orderIndex = productTypeCategory.getOrderIndex();
        this.status = productTypeCategory.getStatus();
        this.path = productTypeCategory.getPath();
        this.parent = productTypeCategory.getParent() == null ? null : productTypeCategory.getParent().getId();
    }

    public void setParent(Long parent) {
        this.parent = parent;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ProductTypeCategoryDTO productTypeCategoryDTO = (ProductTypeCategoryDTO) o;

        if ( ! Objects.equals(id, productTypeCategoryDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }


}
