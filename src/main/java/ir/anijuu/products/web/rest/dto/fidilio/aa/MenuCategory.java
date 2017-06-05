package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MenuCategory {

@JsonProperty("MenuCategoryId")
private String menuCategoryId;
@JsonProperty("Title")
private String title;
@JsonProperty("Items")
private List<Item> items = null;
@JsonProperty("Type")
private Object type;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("MenuCategoryId")
public String getMenuCategoryId() {
return menuCategoryId;
}

@JsonProperty("MenuCategoryId")
public void setMenuCategoryId(String menuCategoryId) {
this.menuCategoryId = menuCategoryId;
}

@JsonProperty("Title")
public String getTitle() {
return title;
}

@JsonProperty("Title")
public void setTitle(String title) {
this.title = title;
}

@JsonProperty("Items")
public List<Item> getItems() {
return items;
}

@JsonProperty("Items")
public void setItems(List<Item> items) {
this.items = items;
}

@JsonProperty("Type")
public Object getType() {
return type;
}

@JsonProperty("Type")
public void setType(Object type) {
this.type = type;
}

@JsonAnyGetter
public Map<String, Object> getAdditionalProperties() {
return this.additionalProperties;
}

@JsonAnySetter
public void setAdditionalProperty(String name, Object value) {
this.additionalProperties.put(name, value);
}}
