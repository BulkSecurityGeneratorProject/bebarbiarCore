package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;

public class Rating {

@JsonProperty("Title")
private String title;
@JsonProperty("Rating")
private Integer rating;
@JsonProperty("Date")
private String date;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("Title")
public String getTitle() {
return title;
}

@JsonProperty("Title")
public void setTitle(String title) {
this.title = title;
}

@JsonProperty("Rating")
public Integer getRating() {
return rating;
}

@JsonProperty("Rating")
public void setRating(Integer rating) {
this.rating = rating;
}

@JsonProperty("Date")
public String getDate() {
return date;
}

@JsonProperty("Date")
public void setDate(String date) {
this.date = date;
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
