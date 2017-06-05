package ir.anijuu.products.web.rest.dto;

import ir.anijuu.products.domain.Product;
import ir.anijuu.products.domain.ProductProperty;
import ir.anijuu.products.domain.ProductPropertyValue;

import javax.persistence.Column;
import javax.persistence.ManyToOne;
import java.time.ZonedDateTime;

/**
 * Created by M_Bahrevar on 11/1/2016.
 */
public class ProductPropertyValueDTO {

    private Long id;
    private String value;
    private Boolean accepted;
    private ZonedDateTime fromDateTime;
    private ZonedDateTime toDateTime;
    private ProductProperty productProperty;

    public ProductPropertyValueDTO(ProductPropertyValue propertyValue) {
        this.id = propertyValue.getId();
        this.value =propertyValue.getValue();
        this.accepted = propertyValue.isAccepted();
        this.fromDateTime = propertyValue.getFromDateTime();
        this.toDateTime = propertyValue.getToDateTime();
        this.productProperty = propertyValue.getProductProperty();
    }

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

    public Boolean getAccepted() {
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

    public ProductProperty getProductProperty() {
        return productProperty;
    }

    public void setProductProperty(ProductProperty productProperty) {
        this.productProperty = productProperty;
    }
}
