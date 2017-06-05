package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Review_ {

@JsonProperty("Ratings")
private List<Rating> ratings = null;
@JsonProperty("AverageRating")
private Double averageRating;
@JsonProperty("Username")
private String username;
@JsonProperty("Comment")
private String comment;
@JsonProperty("OverallScore")
private Integer overallScore;
@JsonProperty("TotalLikes")
private Integer totalLikes;
@JsonProperty("IsLiked")
private Boolean isLiked;
@JsonProperty("PhotoUrl")
private Object photoUrl;
@JsonProperty("Date")
private String date;
@JsonProperty("UserProfilePictureUrl")
private Object userProfilePictureUrl;
@JsonProperty("InteriorDesign")
private Integer interiorDesign;
@JsonProperty("ServiceQuality")
private Integer serviceQuality;
@JsonProperty("FoodQuality")
private Integer foodQuality;
@JsonProperty("PriceValue")
private Integer priceValue;
@JsonProperty("OverAllScore")
private Integer overAllScore;
@JsonProperty("Firstname")
private String firstname;
@JsonProperty("Lastname")
private String lastname;
@JsonProperty("VenueName")
private Object venueName;
@JsonProperty("Gender")
private Integer gender;
@JsonProperty("Slug")
private Object slug;
@JsonProperty("VenueType")
private Object venueType;
@JsonProperty("ReviewId")
private String reviewId;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("Ratings")
public List<Rating> getRatings() {
return ratings;
}

@JsonProperty("Ratings")
public void setRatings(List<Rating> ratings) {
this.ratings = ratings;
}

@JsonProperty("AverageRating")
public Double getAverageRating() {
return averageRating;
}

@JsonProperty("AverageRating")
public void setAverageRating(Double averageRating) {
this.averageRating = averageRating;
}

@JsonProperty("Username")
public String getUsername() {
return username;
}

@JsonProperty("Username")
public void setUsername(String username) {
this.username = username;
}

@JsonProperty("Comment")
public String getComment() {
return comment;
}

@JsonProperty("Comment")
public void setComment(String comment) {
this.comment = comment;
}

@JsonProperty("OverallScore")
public Integer getOverallScore() {
return overallScore;
}

@JsonProperty("OverallScore")
public void setOverallScore(Integer overallScore) {
this.overallScore = overallScore;
}

@JsonProperty("TotalLikes")
public Integer getTotalLikes() {
return totalLikes;
}

@JsonProperty("TotalLikes")
public void setTotalLikes(Integer totalLikes) {
this.totalLikes = totalLikes;
}

@JsonProperty("IsLiked")
public Boolean getIsLiked() {
return isLiked;
}

@JsonProperty("IsLiked")
public void setIsLiked(Boolean isLiked) {
this.isLiked = isLiked;
}

@JsonProperty("PhotoUrl")
public Object getPhotoUrl() {
return photoUrl;
}

@JsonProperty("PhotoUrl")
public void setPhotoUrl(Object photoUrl) {
this.photoUrl = photoUrl;
}

@JsonProperty("Date")
public String getDate() {
return date;
}

@JsonProperty("Date")
public void setDate(String date) {
this.date = date;
}

@JsonProperty("UserProfilePictureUrl")
public Object getUserProfilePictureUrl() {
return userProfilePictureUrl;
}

@JsonProperty("UserProfilePictureUrl")
public void setUserProfilePictureUrl(Object userProfilePictureUrl) {
this.userProfilePictureUrl = userProfilePictureUrl;
}

@JsonProperty("InteriorDesign")
public Integer getInteriorDesign() {
return interiorDesign;
}

@JsonProperty("InteriorDesign")
public void setInteriorDesign(Integer interiorDesign) {
this.interiorDesign = interiorDesign;
}

@JsonProperty("ServiceQuality")
public Integer getServiceQuality() {
return serviceQuality;
}

@JsonProperty("ServiceQuality")
public void setServiceQuality(Integer serviceQuality) {
this.serviceQuality = serviceQuality;
}

@JsonProperty("FoodQuality")
public Integer getFoodQuality() {
return foodQuality;
}

@JsonProperty("FoodQuality")
public void setFoodQuality(Integer foodQuality) {
this.foodQuality = foodQuality;
}

@JsonProperty("PriceValue")
public Integer getPriceValue() {
return priceValue;
}

@JsonProperty("PriceValue")
public void setPriceValue(Integer priceValue) {
this.priceValue = priceValue;
}

@JsonProperty("OverAllScore")
public Integer getOverAllScore() {
return overAllScore;
}

@JsonProperty("OverAllScore")
public void setOverAllScore(Integer overAllScore) {
this.overAllScore = overAllScore;
}

@JsonProperty("Firstname")
public String getFirstname() {
return firstname;
}

@JsonProperty("Firstname")
public void setFirstname(String firstname) {
this.firstname = firstname;
}

@JsonProperty("Lastname")
public String getLastname() {
return lastname;
}

@JsonProperty("Lastname")
public void setLastname(String lastname) {
this.lastname = lastname;
}

@JsonProperty("VenueName")
public Object getVenueName() {
return venueName;
}

@JsonProperty("VenueName")
public void setVenueName(Object venueName) {
this.venueName = venueName;
}

@JsonProperty("Gender")
public Integer getGender() {
return gender;
}

@JsonProperty("Gender")
public void setGender(Integer gender) {
this.gender = gender;
}

@JsonProperty("Slug")
public Object getSlug() {
return slug;
}

@JsonProperty("Slug")
public void setSlug(Object slug) {
this.slug = slug;
}

@JsonProperty("VenueType")
public Object getVenueType() {
return venueType;
}

@JsonProperty("VenueType")
public void setVenueType(Object venueType) {
this.venueType = venueType;
}

@JsonProperty("ReviewId")
public String getReviewId() {
return reviewId;
}

@JsonProperty("ReviewId")
public void setReviewId(String reviewId) {
this.reviewId = reviewId;
}

@JsonAnyGetter
public Map<String, Object> getAdditionalProperties() {
return this.additionalProperties;
}

@JsonAnySetter
public void setAdditionalProperty(String name, Object value) {
this.additionalProperties.put(name, value);
}

}
