package ir.anijuu.products.web.rest.dto;

import java.io.Serializable;
import java.util.Objects;


/**
 * A DTO for the RateInfo entity.
 */
public class RateInfoDTO implements Serializable {

    private Long id;

    private String title;

    private String rate;

    private Boolean changed;


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
    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }
    public Boolean getChanged() {
        return changed;
    }

    public void setChanged(Boolean changed) {
        this.changed = changed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        RateInfoDTO rateInfoDTO = (RateInfoDTO) o;

        if ( ! Objects.equals(id, rateInfoDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "RateInfoDTO{" +
            "id=" + id +
            ", title='" + title + "'" +
            ", rate='" + rate + "'" +
            ", changed='" + changed + "'" +
            '}';
    }
}
