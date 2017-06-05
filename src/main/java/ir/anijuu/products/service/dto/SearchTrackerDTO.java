package ir.anijuu.products.service.dto;

import java.time.ZonedDateTime;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;


/**
 * A DTO for the SearchTracker entity.
 */
public class SearchTrackerDTO implements Serializable {

    private Long id;

    private ZonedDateTime datetime;

    private String content;


    private Long shopTypeId;
    

    private String shopTypeY;

    private Long userId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public ZonedDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(ZonedDateTime datetime) {
        this.datetime = datetime;
    }
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getShopTypeId() {
        return shopTypeId;
    }

    public void setShopTypeId(Long shopTypeId) {
        this.shopTypeId = shopTypeId;
    }


    public String getShopTypeY() {
        return shopTypeY;
    }

    public void setShopTypeY(String shopTypeY) {
        this.shopTypeY = shopTypeY;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        SearchTrackerDTO searchTrackerDTO = (SearchTrackerDTO) o;

        if ( ! Objects.equals(id, searchTrackerDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "SearchTrackerDTO{" +
            "id=" + id +
            ", datetime='" + datetime + "'" +
            ", content='" + content + "'" +
            '}';
    }
}
