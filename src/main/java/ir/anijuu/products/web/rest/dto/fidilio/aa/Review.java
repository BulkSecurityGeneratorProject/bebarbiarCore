package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Review {

@JsonProperty("AverageRating")
private Double averageRating;
@JsonProperty("Username")
private String username;
@JsonProperty("Comment")
private String comment;
@JsonProperty("FirstName")
private String firstName;
@JsonProperty("LastName")
private String lastName;
@JsonProperty("TotalLikes")
private Integer totalLikes;
@JsonProperty("VenueName")
private String venueName;
@JsonProperty("RestaurantType")
private List<Object> restaurantType = null;
@JsonProperty("IsLiked")
private Boolean isLiked;
@JsonProperty("PhotoUrl")
private Object photoUrl;
@JsonProperty("PhotoUrls")
private List<Object> photoUrls = null;
@JsonProperty("Date")
private String date;
@JsonProperty("UserProfilePictureUrl")
private Object userProfilePictureUrl;
@JsonProperty("ReviewId")
private String reviewId;
@JsonProperty("RestaurantPhotoUrl")
private String restaurantPhotoUrl;
@JsonProperty("IsPremium")
private Boolean isPremium;
@JsonProperty("UserLevel")
private String userLevel;
@JsonProperty("VenueId")
private String venueId;
@JsonProperty("InteriorDesign")
private Integer interiorDesign;
@JsonProperty("ServiceQuality")
private Integer serviceQuality;
@JsonProperty("FoodQuality")
private Integer foodQuality;
@JsonProperty("PriceValue")
private Integer priceValue;
@JsonProperty("Smiley")
private Integer smiley;
@JsonProperty("Slug")
private Object slug;
@JsonProperty("Gender")
private Integer gender;
@JsonProperty("VenueType")
private Object venueType;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

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

@JsonProperty("FirstName")
public String getFirstName() {
return firstName;
}

@JsonProperty("FirstName")
public void setFirstName(String firstName) {
this.firstName = firstName;
}

@JsonProperty("LastName")
public String getLastName() {
return lastName;
}

@JsonProperty("LastName")
public void setLastName(String lastName) {
this.lastName = lastName;
}

@JsonProperty("TotalLikes")
public Integer getTotalLikes() {
return totalLikes;
}

@JsonProperty("TotalLikes")
public void setTotalLikes(Integer totalLikes) {
this.totalLikes = totalLikes;
}

@JsonProperty("VenueName")
public String getVenueName() {
return venueName;
}

@JsonProperty("VenueName")
public void setVenueName(String venueName) {
this.venueName = venueName;
}

@JsonProperty("RestaurantType")
public List<Object> getRestaurantType() {
return restaurantType;
}

@JsonProperty("RestaurantType")
public void setRestaurantType(List<Object> restaurantType) {
this.restaurantType = restaurantType;
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

@JsonProperty("PhotoUrls")
public List<Object> getPhotoUrls() {
return photoUrls;
}

@JsonProperty("PhotoUrls")
public void setPhotoUrls(List<Object> photoUrls) {
this.photoUrls = photoUrls;
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

@JsonProperty("ReviewId")
public String getReviewId() {
return reviewId;
}

@JsonProperty("ReviewId")
public void setReviewId(String reviewId) {
this.reviewId = reviewId;
}

@JsonProperty("RestaurantPhotoUrl")
public String getRestaurantPhotoUrl() {
return restaurantPhotoUrl;
}

@JsonProperty("RestaurantPhotoUrl")
public void setRestaurantPhotoUrl(String restaurantPhotoUrl) {
this.restaurantPhotoUrl = restaurantPhotoUrl;
}

@JsonProperty("IsPremium")
public Boolean getIsPremium() {
return isPremium;
}

@JsonProperty("IsPremium")
public void setIsPremium(Boolean isPremium) {
this.isPremium = isPremium;
}

@JsonProperty("UserLevel")
public String getUserLevel() {
return userLevel;
}

@JsonProperty("UserLevel")
public void setUserLevel(String userLevel) {
this.userLevel = userLevel;
}

@JsonProperty("VenueId")
public String getVenueId() {
return venueId;
}

@JsonProperty("VenueId")
public void setVenueId(String venueId) {
this.venueId = venueId;
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

@JsonProperty("Smiley")
public Integer getSmiley() {
return smiley;
}

@JsonProperty("Smiley")
public void setSmiley(Integer smiley) {
this.smiley = smiley;
}

@JsonProperty("Slug")
public Object getSlug() {
return slug;
}

@JsonProperty("Slug")
public void setSlug(Object slug) {
this.slug = slug;
}

@JsonProperty("Gender")
public Integer getGender() {
return gender;
}

@JsonProperty("Gender")
public void setGender(Integer gender) {
this.gender = gender;
}

@JsonProperty("VenueType")
public Object getVenueType() {
return venueType;
}

@JsonProperty("VenueType")
public void setVenueType(Object venueType) {
this.venueType = venueType;
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
