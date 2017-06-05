package ir.anijuu.products.web.rest.dto.farzad;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by farzad on 8/8/16.
 */
public class IbartarProductDTO {
    @JsonProperty
    private String json;
    @JsonProperty
    private Long stateId;
    @JsonProperty
    private String productTypeId;

    public IbartarProductDTO(String json, Long stateId, String productTypeId) {
        this.json = json;
        this.stateId = stateId;
        this.productTypeId = productTypeId;
    }

    public IbartarProductDTO() {
    }

    public String getJson() {
        return json;
    }

    public void setJson(String json) {
        this.json = json;
    }

    public Long getStateId() {
        return stateId;
    }

    public void setStateId(Long stateId) {
        this.stateId = stateId;
    }

    public String getProductTypeId() {
        return productTypeId;
    }

    public void setProductTypeId(String productTypeId) {
        this.productTypeId = productTypeId;
    }
}
