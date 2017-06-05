package ir.anijuu.products.web.rest.dto;

import java.time.ZonedDateTime;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import ir.anijuu.products.domain.enumeration.UserNewPlaceStatus;

/**
 * A DTO for the UserNewPlace entity.
 */
public class UserNewPlaceDTO implements Serializable {

    private Long id;

    private Double longitude;

    private Double latitude;

    private String description;

    private UserNewPlaceStatus status;

    private ZonedDateTime createDate;


    private Long userId;
    

    private String userLogin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public UserNewPlaceStatus getStatus() {
        return status;
    }

    public void setStatus(UserNewPlaceStatus status) {
        this.status = status;
    }
    public ZonedDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(ZonedDateTime createDate) {
        this.createDate = createDate;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }


    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        UserNewPlaceDTO userNewPlaceDTO = (UserNewPlaceDTO) o;

        if ( ! Objects.equals(id, userNewPlaceDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "UserNewPlaceDTO{" +
            "id=" + id +
            ", longitude='" + longitude + "'" +
            ", latitude='" + latitude + "'" +
            ", description='" + description + "'" +
            ", status='" + status + "'" +
            ", createDate='" + createDate + "'" +
            '}';
    }
}
