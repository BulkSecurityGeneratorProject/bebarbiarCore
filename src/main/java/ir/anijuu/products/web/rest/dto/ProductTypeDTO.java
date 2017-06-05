package ir.anijuu.products.web.rest.dto;

import ir.anijuu.products.domain.ProductProperty;
import ir.anijuu.products.domain.ProductType;
import ir.anijuu.products.domain.ProductTypeStatus;
import ir.anijuu.products.domain.enumeration.ProductTypeActivityType;
import ir.anijuu.products.domain.enumeration.TrustType;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by M_Bahrevar on 11/5/2016.
 */
public class ProductTypeDTO {
    private Long id;
    private String title;
    private String description;
    private TrustType trustType;
    private String color;
    private String icon;
    private String bannerContentType;
    private String bannerUrl;
    private ProductTypeStatus status;
    private Set<ProductProperty> properties = new HashSet<>();
    private ProductTypeCategoryDTO productTypeCategory;
    private ProductTypeActivityType  productTypeActivityType;


    public ProductTypeDTO(ProductType productType) {
        this.id = productType.getId();
        this.title = productType.getTitle();
        this.description = productType.getDescription();
        this.trustType = productType.getTrustType();
        this.color = productType.getColor();
        this.icon = productType.getIcon();
        this.bannerContentType = productType.getBannerContentType();
        this.status =productType.getStatus();
        this.properties = productType.getProperties();
        this.productTypeCategory = new ProductTypeCategoryDTO(productType.getProductTypeCategory());
        this.productTypeActivityType=productType.getProductTypeActivityType();
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TrustType getTrustType() {
        return trustType;
    }

    public void setTrustType(TrustType trustType) {
        this.trustType = trustType;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getBannerContentType() {
        return bannerContentType;
    }

    public void setBannerContentType(String bannerContentType) {
        this.bannerContentType = bannerContentType;
    }

    public String getBannerUrl() {
        return bannerUrl;
    }

    public void setBannerUrl(String bannerUrl) {
        this.bannerUrl = bannerUrl;
    }

    public ProductTypeStatus getStatus() {
        return status;
    }

    public void setStatus(ProductTypeStatus status) {
        this.status = status;
    }

    public Set<ProductProperty> getProperties() {
        return properties;
    }

    public void setProperties(Set<ProductProperty> properties) {
        this.properties = properties;
    }

    public ProductTypeCategoryDTO getProductTypeCategory() {
        return productTypeCategory;
    }

    public void setProductTypeCategory(ProductTypeCategoryDTO productTypeCategory) {
        this.productTypeCategory = productTypeCategory;
    }
}
