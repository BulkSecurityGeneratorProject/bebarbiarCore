package ir.anijuu.products.web.rest.dto.fidilio;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "List",
        "PageCount"
})
public class RS {

    @JsonProperty("Resturant")
    private java.util.List<Resturant> list = null;
    @JsonProperty("PageCount")
    private Integer pageCount;

    @JsonProperty("Resturant")
    public java.util.List<Resturant> getList() {
        return list;
    }

    @JsonProperty("Resturant")
    public void setList(java.util.List<Resturant> list) {
        this.list = list;
    }

    @JsonProperty("PageCount")
    public Integer getPageCount() {
        return pageCount;
    }

    @JsonProperty("PageCount")
    public void setPageCount(Integer pageCount) {
        this.pageCount = pageCount;
    }

}
