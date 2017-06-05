package ir.anijuu.products.web.rest.dto;

import ir.anijuu.products.domain.Product;
import ir.anijuu.products.domain.ProductContent;
import ir.anijuu.products.domain.enumeration.ContentType;

import javax.persistence.*;

/**
 * Created by M_Bahrevar on 11/1/2016.
 */
public class ProductContentDTO {

    private Long id;
    private ContentType contentType;
    private String posterUrl;
    private String posterContentType;
    private String description;
    private String contentUrl;

    public ProductContentDTO(ProductContent productContent) {
        this.id = productContent.getId();
        this.contentType = productContent.getContentType();
        this.posterUrl = productContent.getPosterUrl();
        this.posterContentType = productContent.getPosterContentType();
        this.description = productContent.getDescription();
        this.contentUrl = productContent.getContentUrl();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ContentType getContentType() {
        return contentType;
    }

    public void setContentType(ContentType contentType) {
        this.contentType = contentType;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public String getPosterContentType() {
        return posterContentType;
    }

    public void setPosterContentType(String posterContentType) {
        this.posterContentType = posterContentType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContentUrl() {
        return contentUrl;
    }

    public void setContentUrl(String contentUrl) {
        this.contentUrl = contentUrl;
    }
}
