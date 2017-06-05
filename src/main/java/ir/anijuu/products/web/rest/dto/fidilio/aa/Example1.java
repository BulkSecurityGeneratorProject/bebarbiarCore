package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Example1 {

@JsonProperty("RestaurantId")
private String restaurantId;
@JsonProperty("Name")
private String name;
@JsonProperty("Description")
private String description;
@JsonProperty("RestaurantTypes")
private List<RestaurantType> restaurantTypes = null;
@JsonProperty("FoodTypes")
private List<FoodType> foodTypes = null;
@JsonProperty("CityRegions")
private List<CityRegion> cityRegions = null;
@JsonProperty("Rate")
private Double rate;
@JsonProperty("Latitude")
private Double latitude;
@JsonProperty("Longitude")
private Double longitude;
@JsonProperty("Address")
private String address;
@JsonProperty("WorkingHours")
private String workingHours;
@JsonProperty("PhoneReservation")
private Object phoneReservation;
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
@JsonProperty("FaceBookLink")
private Object faceBookLink;
@JsonProperty("TwiterLink")
private Object twiterLink;
@JsonProperty("InstagramLink")
private Object instagramLink;
@JsonProperty("RamadanMenu")
private Object ramadanMenu;
@JsonProperty("Photo")
private Photo photo;
@JsonProperty("IsFidilioClubMember")
private Boolean isFidilioClubMember;
@JsonProperty("FidilioClubDiscountPrecent")
private Object fidilioClubDiscountPrecent;
@JsonProperty("LastModificationDate")
private String lastModificationDate;
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
@JsonProperty("PhotoUrls")
private List<Object> photoUrls = null;
@JsonProperty("ThumbnailUrl")
private String thumbnailUrl;
@JsonProperty("Slug")
private String slug;
@JsonProperty("WebLink")
private Object webLink;
@JsonProperty("Priority")
private Integer priority;
@JsonProperty("ZoodFoodUrl")
private Object zoodFoodUrl;
@JsonProperty("MenuCategories")
private List<MenuCategory> menuCategories = null;
@JsonProperty("FavoriteMenuItems")
private List<Object> favoriteMenuItems = null;
@JsonProperty("PremiumNews")
private Object premiumNews;
@JsonProperty("IsPremium")
private Boolean isPremium;
@JsonProperty("FollowersCount")
private Integer followersCount;
@JsonProperty("Reviews")
private List<Review> reviews = null;
@JsonProperty("FollowersReview")
private Object followersReview;
@JsonProperty("OverAllScores")
private OverAllScores overAllScores;
@JsonProperty("LatestCommentModel")
private Object latestCommentModel;
@JsonProperty("RelatedRestaurants")
private List<Object> relatedRestaurants = null;
@JsonProperty("BreakFastMenu")
private String breakFastMenu;
@JsonProperty("FoodQuality")
private Double foodQuality;
@JsonProperty("ServiceQuality")
private Double serviceQuality;
@JsonProperty("InteriorDesign")
private Double interiorDesign;
@JsonProperty("PriceValue")
private Double priceValue;
@JsonProperty("OverallScore")
private Integer overallScore;
@JsonProperty("AdReportageLink")
private Object adReportageLink;
@JsonProperty("Swf")
private Object swf;
@JsonProperty("CoverPhoto")
private Object coverPhoto;
@JsonProperty("IsFollowed")
private Boolean isFollowed;
@JsonProperty("MetaTagTitle")
private Object metaTagTitle;
@JsonProperty("MetaTagDescription")
private Object metaTagDescription;
@JsonProperty("VideoUrl")
private Object videoUrl;
@JsonProperty("City")
private String city;
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
public List<RestaurantType> getRestaurantTypes() {
return restaurantTypes;
}

@JsonProperty("RestaurantTypes")
public void setRestaurantTypes(List<RestaurantType> restaurantTypes) {
this.restaurantTypes = restaurantTypes;
}

@JsonProperty("FoodTypes")
public List<FoodType> getFoodTypes() {
return foodTypes;
}

@JsonProperty("FoodTypes")
public void setFoodTypes(List<FoodType> foodTypes) {
this.foodTypes = foodTypes;
}

@JsonProperty("CityRegions")
public List<CityRegion> getCityRegions() {
return cityRegions;
}

@JsonProperty("CityRegions")
public void setCityRegions(List<CityRegion> cityRegions) {
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

@JsonProperty("WorkingHours")
public String getWorkingHours() {
return workingHours;
}

@JsonProperty("WorkingHours")
public void setWorkingHours(String workingHours) {
this.workingHours = workingHours;
}

@JsonProperty("PhoneReservation")
public Object getPhoneReservation() {
return phoneReservation;
}

@JsonProperty("PhoneReservation")
public void setPhoneReservation(Object phoneReservation) {
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

@JsonProperty("FaceBookLink")
public Object getFaceBookLink() {
return faceBookLink;
}

@JsonProperty("FaceBookLink")
public void setFaceBookLink(Object faceBookLink) {
this.faceBookLink = faceBookLink;
}

@JsonProperty("TwiterLink")
public Object getTwiterLink() {
return twiterLink;
}

@JsonProperty("TwiterLink")
public void setTwiterLink(Object twiterLink) {
this.twiterLink = twiterLink;
}

@JsonProperty("InstagramLink")
public Object getInstagramLink() {
return instagramLink;
}

@JsonProperty("InstagramLink")
public void setInstagramLink(Object instagramLink) {
this.instagramLink = instagramLink;
}

@JsonProperty("RamadanMenu")
public Object getRamadanMenu() {
return ramadanMenu;
}

@JsonProperty("RamadanMenu")
public void setRamadanMenu(Object ramadanMenu) {
this.ramadanMenu = ramadanMenu;
}

@JsonProperty("Photo")
public Photo getPhoto() {
return photo;
}

@JsonProperty("Photo")
public void setPhoto(Photo photo) {
this.photo = photo;
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

@JsonProperty("LastModificationDate")
public String getLastModificationDate() {
return lastModificationDate;
}

@JsonProperty("LastModificationDate")
public void setLastModificationDate(String lastModificationDate) {
this.lastModificationDate = lastModificationDate;
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

@JsonProperty("PhotoUrls")
public List<Object> getPhotoUrls() {
return photoUrls;
}

@JsonProperty("PhotoUrls")
public void setPhotoUrls(List<Object> photoUrls) {
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
public Object getWebLink() {
return webLink;
}

@JsonProperty("WebLink")
public void setWebLink(Object webLink) {
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

@JsonProperty("ZoodFoodUrl")
public Object getZoodFoodUrl() {
return zoodFoodUrl;
}

@JsonProperty("ZoodFoodUrl")
public void setZoodFoodUrl(Object zoodFoodUrl) {
this.zoodFoodUrl = zoodFoodUrl;
}

@JsonProperty("MenuCategories")
public List<MenuCategory> getMenuCategories() {
return menuCategories;
}

@JsonProperty("MenuCategories")
public void setMenuCategories(List<MenuCategory> menuCategories) {
this.menuCategories = menuCategories;
}

@JsonProperty("FavoriteMenuItems")
public List<Object> getFavoriteMenuItems() {
return favoriteMenuItems;
}

@JsonProperty("FavoriteMenuItems")
public void setFavoriteMenuItems(List<Object> favoriteMenuItems) {
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
public List<Review> getReviews() {
return reviews;
}

@JsonProperty("Reviews")
public void setReviews(List<Review> reviews) {
this.reviews = reviews;
}

@JsonProperty("FollowersReview")
public Object getFollowersReview() {
return followersReview;
}

@JsonProperty("FollowersReview")
public void setFollowersReview(Object followersReview) {
this.followersReview = followersReview;
}

@JsonProperty("OverAllScores")
public OverAllScores getOverAllScores() {
return overAllScores;
}

@JsonProperty("OverAllScores")
public void setOverAllScores(OverAllScores overAllScores) {
this.overAllScores = overAllScores;
}

@JsonProperty("LatestCommentModel")
public Object getLatestCommentModel() {
return latestCommentModel;
}

@JsonProperty("LatestCommentModel")
public void setLatestCommentModel(Object latestCommentModel) {
this.latestCommentModel = latestCommentModel;
}

@JsonProperty("RelatedRestaurants")
public List<Object> getRelatedRestaurants() {
return relatedRestaurants;
}

@JsonProperty("RelatedRestaurants")
public void setRelatedRestaurants(List<Object> relatedRestaurants) {
this.relatedRestaurants = relatedRestaurants;
}

@JsonProperty("BreakFastMenu")
public String getBreakFastMenu() {
return breakFastMenu;
}

@JsonProperty("BreakFastMenu")
public void setBreakFastMenu(String breakFastMenu) {
this.breakFastMenu = breakFastMenu;
}

@JsonProperty("FoodQuality")
public Double getFoodQuality() {
return foodQuality;
}

@JsonProperty("FoodQuality")
public void setFoodQuality(Double foodQuality) {
this.foodQuality = foodQuality;
}

@JsonProperty("ServiceQuality")
public Double getServiceQuality() {
return serviceQuality;
}

@JsonProperty("ServiceQuality")
public void setServiceQuality(Double serviceQuality) {
this.serviceQuality = serviceQuality;
}

@JsonProperty("InteriorDesign")
public Double getInteriorDesign() {
return interiorDesign;
}

@JsonProperty("InteriorDesign")
public void setInteriorDesign(Double interiorDesign) {
this.interiorDesign = interiorDesign;
}

@JsonProperty("PriceValue")
public Double getPriceValue() {
return priceValue;
}

@JsonProperty("PriceValue")
public void setPriceValue(Double priceValue) {
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

@JsonProperty("AdReportageLink")
public Object getAdReportageLink() {
return adReportageLink;
}

@JsonProperty("AdReportageLink")
public void setAdReportageLink(Object adReportageLink) {
this.adReportageLink = adReportageLink;
}

@JsonProperty("Swf")
public Object getSwf() {
return swf;
}

@JsonProperty("Swf")
public void setSwf(Object swf) {
this.swf = swf;
}

@JsonProperty("CoverPhoto")
public Object getCoverPhoto() {
return coverPhoto;
}

@JsonProperty("CoverPhoto")
public void setCoverPhoto(Object coverPhoto) {
this.coverPhoto = coverPhoto;
}

@JsonProperty("IsFollowed")
public Boolean getIsFollowed() {
return isFollowed;
}

@JsonProperty("IsFollowed")
public void setIsFollowed(Boolean isFollowed) {
this.isFollowed = isFollowed;
}

@JsonProperty("MetaTagTitle")
public Object getMetaTagTitle() {
return metaTagTitle;
}

@JsonProperty("MetaTagTitle")
public void setMetaTagTitle(Object metaTagTitle) {
this.metaTagTitle = metaTagTitle;
}

@JsonProperty("MetaTagDescription")
public Object getMetaTagDescription() {
return metaTagDescription;
}

@JsonProperty("MetaTagDescription")
public void setMetaTagDescription(Object metaTagDescription) {
this.metaTagDescription = metaTagDescription;
}

@JsonProperty("VideoUrl")
public Object getVideoUrl() {
return videoUrl;
}

@JsonProperty("VideoUrl")
public void setVideoUrl(Object videoUrl) {
this.videoUrl = videoUrl;
}

@JsonProperty("City")
public String getCity() {
return city;
}

@JsonProperty("City")
public void setCity(String city) {
this.city = city;
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
