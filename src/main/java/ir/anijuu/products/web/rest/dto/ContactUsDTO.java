package ir.anijuu.products.web.rest.dto;

import com.fasterxml.jackson.annotation.JsonCreator;

public class ContactUsDTO {

    private String title;

    private String description;

    public ContactUsDTO(String title, String description) {
        this.title = title;
        this.description = description;
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

    @JsonCreator
    public ContactUsDTO() {
    }

}
