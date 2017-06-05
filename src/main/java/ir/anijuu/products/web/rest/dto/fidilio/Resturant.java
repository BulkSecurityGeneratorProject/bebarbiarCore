package ir.anijuu.products.web.rest.dto.fidilio;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Resturant {

@JsonProperty("RestaurantId")
private String restaurantId;
@JsonProperty("Name")
private String name;
@JsonProperty("Description")
private String description;
@JsonProperty("RestaurantTypes")
private Object restaurantTypes;
@JsonProperty("FoodTypes")
private Object foodTypes;
@JsonProperty("CityRegions")
private Object cityRegions;
@JsonProperty("Rate")
private Double rate;
@JsonProperty("Latitude")
private Double latitude;
@JsonProperty("Longitude")
private Double longitude;
@JsonProperty("Address")
private String address;
@JsonProperty("LastModificationDate")
private String lastModificationDate;
@JsonProperty("WorkingHours")
private String workingHours;
@JsonProperty("PhoneReservation")
private String phoneReservation;
@JsonProperty("HasWiFiInternet")
private Boolean hasWiFiInternet;
@JsonProperty("HasPos")
private Boolean hasPos;
@JsonProperty("ParkingPlaceEasilyFound")
private Boolean parkingPlaceEasilyFound;
@JsonProperty("HasLiveMusic")
private Boolean hasLiveMusic;
@JsonProperty("HasKidsPlayground")
private Boolean hasKidsPlayground;
@JsonProperty("HasDelivery")
private Boolean hasDelivery;
@JsonProperty("HasBreakfast")
private Boolean hasBreakfast;
@JsonProperty("HasSaladBar")
private Boolean hasSaladBar;
@JsonProperty("PriceClass")
private Integer priceClass;
@JsonProperty("ServiceFee")
private String serviceFee;
@JsonProperty("Phone")
private String phone;
@JsonProperty("IsFidilioClubMember")
private Boolean isFidilioClubMember;
@JsonProperty("FidilioClubDiscountPrecent")
private Object fidilioClubDiscountPrecent;
@JsonProperty("NumberOfChairs")
private Integer numberOfChairs;
@JsonProperty("UrbanDistrict")
private Integer urbanDistrict;
@JsonProperty("IsFeaturedOnMobileNearMe")
private Boolean isFeaturedOnMobileNearMe;
@JsonProperty("FeaturedOnMobileNearMeText")
private Object featuredOnMobileNearMeText;
@JsonProperty("RestaurantSituations")
private Object restaurantSituations;
@JsonProperty("OverAllScores")
private Object overAllScores;
@JsonProperty("PhotoUrls")
private List<String> photoUrls = null;
@JsonProperty("ThumbnailUrl")
private String thumbnailUrl;
@JsonProperty("Slug")
private String slug;
@JsonProperty("WebLink")
private String webLink;
@JsonProperty("Priority")
private Integer priority;
@JsonProperty("MenuCategories")
private Object menuCategories;
@JsonProperty("FavoriteMenuItems")
private Object favoriteMenuItems;
@JsonProperty("PremiumNews")
private Object premiumNews;
@JsonProperty("IsPremium")
private Boolean isPremium;
@JsonProperty("FollowersCount")
private Integer followersCount;
@JsonProperty("Reviews")
private Object reviews;
@JsonProperty("BreakFastMenu")
private Object breakFastMenu;
@JsonProperty("FoodQuality")
private Integer foodQuality;
@JsonProperty("ServiceQuality")
private Integer serviceQuality;
@JsonProperty("InteriorDesign")
private Integer interiorDesign;
@JsonProperty("PriceValue")
private Integer priceValue;
@JsonProperty("OverallScore")
private Integer overallScore;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("RestaurantId")
public String getRestaurantId() {
return restaurantId;
}

@JsonProperty("RestaurantId")
public void setRestaurantId(String restaurantId) {
this.restaurantId = restaurantId;
}

@JsonProperty("Name")
public String getName() {
return name;
}

@JsonProperty("Name")
public void setName(String name) {
this.name = name;
}

@JsonProperty("Description")
public String getDescription() {
return description;
}

@JsonProperty("Description")
public void setDescription(String description) {
this.description = description;
}

@JsonProperty("RestaurantTypes")
public Object getRestaurantTypes() {
return restaurantTypes;
}

@JsonProperty("RestaurantTypes")
public void setRestaurantTypes(Object restaurantTypes) {
this.restaurantTypes = restaurantTypes;
}

@JsonProperty("FoodTypes")
public Object getFoodTypes() {
return foodTypes;
}

@JsonProperty("FoodTypes")
public void setFoodTypes(Object foodTypes) {
this.foodTypes = foodTypes;
}

@JsonProperty("CityRegions")
public Object getCityRegions() {
return cityRegions;
}

@JsonProperty("CityRegions")
public void setCityRegions(Object cityRegions) {
this.cityRegions = cityRegions;
}

@JsonProperty("Rate")
public Double getRate() {
return rate;
}

@JsonProperty("Rate")
public void setRate(Double rate) {
this.rate = rate;
}

@JsonProperty("Latitude")
public Double getLatitude() {
return latitude;
}

@JsonProperty("Latitude")
public void setLatitude(Double latitude) {
this.latitude = latitude;
}

@JsonProperty("Longitude")
public Double getLongitude() {
return longitude;
}

@JsonProperty("Longitude")
public void setLongitude(Double longitude) {
this.longitude = longitude;
}

@JsonProperty("Address")
public String getAddress() {
return address;
}

@JsonProperty("Address")
public void setAddress(String address) {
this.address = address;
}

@JsonProperty("LastModificationDate")
public String getLastModificationDate() {
return lastModificationDate;
}

@JsonProperty("LastModificationDate")
public void setLastModificationDate(String lastModificationDate) {
this.lastModificationDate = lastModificationDate;
}

@JsonProperty("WorkingHours")
public String getWorkingHours() {
return workingHours;
}

@JsonProperty("WorkingHours")
public void setWorkingHours(String workingHours) {
this.workingHours = workingHours;
}

@JsonProperty("PhoneReservation")
public String getPhoneReservation() {
return phoneReservation;
}

@JsonProperty("PhoneReservation")
public void setPhoneReservation(String phoneReservation) {
this.phoneReservation = phoneReservation;
}

@JsonProperty("HasWiFiInternet")
public Boolean getHasWiFiInternet() {
return hasWiFiInternet;
}

@JsonProperty("HasWiFiInternet")
public void setHasWiFiInternet(Boolean hasWiFiInternet) {
this.hasWiFiInternet = hasWiFiInternet;
}

@JsonProperty("HasPos")
public Boolean getHasPos() {
return hasPos;
}

@JsonProperty("HasPos")
public void setHasPos(Boolean hasPos) {
this.hasPos = hasPos;
}

@JsonProperty("ParkingPlaceEasilyFound")
public Boolean getParkingPlaceEasilyFound() {
return parkingPlaceEasilyFound;
}

@JsonProperty("ParkingPlaceEasilyFound")
public void setParkingPlaceEasilyFound(Boolean parkingPlaceEasilyFound) {
this.parkingPlaceEasilyFound = parkingPlaceEasilyFound;
}

@JsonProperty("HasLiveMusic")
public Boolean getHasLiveMusic() {
return hasLiveMusic;
}

@JsonProperty("HasLiveMusic")
public void setHasLiveMusic(Boolean hasLiveMusic) {
this.hasLiveMusic = hasLiveMusic;
}

@JsonProperty("HasKidsPlayground")
public Boolean getHasKidsPlayground() {
return hasKidsPlayground;
}

@JsonProperty("HasKidsPlayground")
public void setHasKidsPlayground(Boolean hasKidsPlayground) {
this.hasKidsPlayground = hasKidsPlayground;
}

@JsonProperty("HasDelivery")
public Boolean getHasDelivery() {
return hasDelivery;
}

@JsonProperty("HasDelivery")
public void setHasDelivery(Boolean hasDelivery) {
this.hasDelivery = hasDelivery;
}

@JsonProperty("HasBreakfast")
public Boolean getHasBreakfast() {
return hasBreakfast;
}

@JsonProperty("HasBreakfast")
public void setHasBreakfast(Boolean hasBreakfast) {
this.hasBreakfast = hasBreakfast;
}

@JsonProperty("HasSaladBar")
public Boolean getHasSaladBar() {
return hasSaladBar;
}

@JsonProperty("HasSaladBar")
public void setHasSaladBar(Boolean hasSaladBar) {
this.hasSaladBar = hasSaladBar;
}

@JsonProperty("PriceClass")
public Integer getPriceClass() {
return priceClass;
}

@JsonProperty("PriceClass")
public void setPriceClass(Integer priceClass) {
this.priceClass = priceClass;
}

@JsonProperty("ServiceFee")
public String getServiceFee() {
return serviceFee;
}

@JsonProperty("ServiceFee")
public void setServiceFee(String serviceFee) {
this.serviceFee = serviceFee;
}

@JsonProperty("Phone")
public String getPhone() {
return phone;
}

@JsonProperty("Phone")
public void setPhone(String phone) {
this.phone = phone;
}

@JsonProperty("IsFidilioClubMember")
public Boolean getIsFidilioClubMember() {
return isFidilioClubMember;
}

@JsonProperty("IsFidilioClubMember")
public void setIsFidilioClubMember(Boolean isFidilioClubMember) {
this.isFidilioClubMember = isFidilioClubMember;
}

@JsonProperty("FidilioClubDiscountPrecent")
public Object getFidilioClubDiscountPrecent() {
return fidilioClubDiscountPrecent;
}

@JsonProperty("FidilioClubDiscountPrecent")
public void setFidilioClubDiscountPrecent(Object fidilioClubDiscountPrecent) {
this.fidilioClubDiscountPrecent = fidilioClubDiscountPrecent;
}

@JsonProperty("NumberOfChairs")
public Integer getNumberOfChairs() {
return numberOfChairs;
}

@JsonProperty("NumberOfChairs")
public void setNumberOfChairs(Integer numberOfChairs) {
this.numberOfChairs = numberOfChairs;
}

@JsonProperty("UrbanDistrict")
public Integer getUrbanDistrict() {
return urbanDistrict;
}

@JsonProperty("UrbanDistrict")
public void setUrbanDistrict(Integer urbanDistrict) {
this.urbanDistrict = urbanDistrict;
}

@JsonProperty("IsFeaturedOnMobileNearMe")
public Boolean getIsFeaturedOnMobileNearMe() {
return isFeaturedOnMobileNearMe;
}

@JsonProperty("IsFeaturedOnMobileNearMe")
public void setIsFeaturedOnMobileNearMe(Boolean isFeaturedOnMobileNearMe) {
this.isFeaturedOnMobileNearMe = isFeaturedOnMobileNearMe;
}

@JsonProperty("FeaturedOnMobileNearMeText")
public Object getFeaturedOnMobileNearMeText() {
return featuredOnMobileNearMeText;
}

@JsonProperty("FeaturedOnMobileNearMeText")
public void setFeaturedOnMobileNearMeText(Object featuredOnMobileNearMeText) {
this.featuredOnMobileNearMeText = featuredOnMobileNearMeText;
}

@JsonProperty("RestaurantSituations")
public Object getRestaurantSituations() {
return restaurantSituations;
}

@JsonProperty("RestaurantSituations")
public void setRestaurantSituations(Object restaurantSituations) {
this.restaurantSituations = restaurantSituations;
}

@JsonProperty("OverAllScores")
public Object getOverAllScores() {
return overAllScores;
}

@JsonProperty("OverAllScores")
public void setOverAllScores(Object overAllScores) {
this.overAllScores = overAllScores;
}

@JsonProperty("PhotoUrls")
public List<String> getPhotoUrls() {
return photoUrls;
}

@JsonProperty("PhotoUrls")
public void setPhotoUrls(List<String> photoUrls) {
this.photoUrls = photoUrls;
}

@JsonProperty("ThumbnailUrl")
public String getThumbnailUrl() {
return thumbnailUrl;
}

@JsonProperty("ThumbnailUrl")
public void setThumbnailUrl(String thumbnailUrl) {
this.thumbnailUrl = thumbnailUrl;
}

@JsonProperty("Slug")
public String getSlug() {
return slug;
}

@JsonProperty("Slug")
public void setSlug(String slug) {
this.slug = slug;
}

@JsonProperty("WebLink")
public String getWebLink() {
return webLink;
}

@JsonProperty("WebLink")
public void setWebLink(String webLink) {
this.webLink = webLink;
}

@JsonProperty("Priority")
public Integer getPriority() {
return priority;
}

@JsonProperty("Priority")
public void setPriority(Integer priority) {
this.priority = priority;
}

@JsonProperty("MenuCategories")
public Object getMenuCategories() {
return menuCategories;
}

@JsonProperty("MenuCategories")
public void setMenuCategories(Object menuCategories) {
this.menuCategories = menuCategories;
}

@JsonProperty("FavoriteMenuItems")
public Object getFavoriteMenuItems() {
return favoriteMenuItems;
}

@JsonProperty("FavoriteMenuItems")
public void setFavoriteMenuItems(Object favoriteMenuItems) {
this.favoriteMenuItems = favoriteMenuItems;
}

@JsonProperty("PremiumNews")
public Object getPremiumNews() {
return premiumNews;
}

@JsonProperty("PremiumNews")
public void setPremiumNews(Object premiumNews) {
this.premiumNews = premiumNews;
}

@JsonProperty("IsPremium")
public Boolean getIsPremium() {
return isPremium;
}

@JsonProperty("IsPremium")
public void setIsPremium(Boolean isPremium) {
this.isPremium = isPremium;
}

@JsonProperty("FollowersCount")
public Integer getFollowersCount() {
return followersCount;
}

@JsonProperty("FollowersCount")
public void setFollowersCount(Integer followersCount) {
this.followersCount = followersCount;
}

@JsonProperty("Reviews")
public Object getReviews() {
return reviews;
}

@JsonProperty("Reviews")
public void setReviews(Object reviews) {
this.reviews = reviews;
}

@JsonProperty("BreakFastMenu")
public Object getBreakFastMenu() {
return breakFastMenu;
}

@JsonProperty("BreakFastMenu")
public void setBreakFastMenu(Object breakFastMenu) {
this.breakFastMenu = breakFastMenu;
}

@JsonProperty("FoodQuality")
public Integer getFoodQuality() {
return foodQuality;
}

@JsonProperty("FoodQuality")
public void setFoodQuality(Integer foodQuality) {
this.foodQuality = foodQuality;
}

@JsonProperty("ServiceQuality")
public Integer getServiceQuality() {
return serviceQuality;
}

@JsonProperty("ServiceQuality")
public void setServiceQuality(Integer serviceQuality) {
this.serviceQuality = serviceQuality;
}

@JsonProperty("InteriorDesign")
public Integer getInteriorDesign() {
return interiorDesign;
}

@JsonProperty("InteriorDesign")
public void setInteriorDesign(Integer interiorDesign) {
this.interiorDesign = interiorDesign;
}

@JsonProperty("PriceValue")
public Integer getPriceValue() {
return priceValue;
}

@JsonProperty("PriceValue")
public void setPriceValue(Integer priceValue) {
this.priceValue = priceValue;
}

@JsonProperty("OverallScore")
public Integer getOverallScore() {
return overallScore;
}

@JsonProperty("OverallScore")
public void setOverallScore(Integer overallScore) {
this.overallScore = overallScore;
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
