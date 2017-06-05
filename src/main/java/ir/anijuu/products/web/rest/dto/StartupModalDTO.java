package ir.anijuu.products.web.rest.dto;

import java.io.Serializable;
import java.util.Objects;


/**
 * A DTO for the StartupModal entity.
 */
public class StartupModalDTO implements Serializable {

    private Long id;

    private String url;

    private Integer index;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        StartupModalDTO startupModalDTO = (StartupModalDTO) o;

        if ( ! Objects.equals(id, startupModalDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "StartupModalDTO{" +
            "id=" + id +
            ", url='" + url + "'" +
            ", index='" + index + "'" +
            '}';
    }
}
