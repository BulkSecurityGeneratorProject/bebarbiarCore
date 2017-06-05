package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;

public class Item {

@JsonProperty("MenuItemId")
private String menuItemId;
@JsonProperty("Title")
private String title;
@JsonProperty("Description")
private String description;
@JsonProperty("Price")
private String price;
@JsonProperty("PhotoUrl")
private Object photoUrl;
@JsonProperty("LastModifiedDate")
private Object lastModifiedDate;
@JsonProperty("TotalLikes")
private Integer totalLikes;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("MenuItemId")
public String getMenuItemId() {
return menuItemId;
}

@JsonProperty("MenuItemId")
public void setMenuItemId(String menuItemId) {
this.menuItemId = menuItemId;
}

@JsonProperty("Title")
public String getTitle() {
return title;
}

@JsonProperty("Title")
public void setTitle(String title) {
this.title = title;
}

@JsonProperty("Description")
public String getDescription() {
return description;
}

@JsonProperty("Description")
public void setDescription(String description) {
this.description = description;
}

@JsonProperty("Price")
public String getPrice() {
return price;
}

@JsonProperty("Price")
public void setPrice(String price) {
this.price = price;
}

@JsonProperty("PhotoUrl")
public Object getPhotoUrl() {
return photoUrl;
}

@JsonProperty("PhotoUrl")
public void setPhotoUrl(Object photoUrl) {
this.photoUrl = photoUrl;
}

@JsonProperty("LastModifiedDate")
public Object getLastModifiedDate() {
return lastModifiedDate;
}

@JsonProperty("LastModifiedDate")
public void setLastModifiedDate(Object lastModifiedDate) {
this.lastModifiedDate = lastModifiedDate;
}

@JsonProperty("TotalLikes")
public Integer getTotalLikes() {
return totalLikes;
}

@JsonProperty("TotalLikes")
public void setTotalLikes(Integer totalLikes) {
this.totalLikes = totalLikes;
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
