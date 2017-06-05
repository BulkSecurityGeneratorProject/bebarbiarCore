
package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;

public class RestaurantType {

@JsonProperty("Id")
private String id;
@JsonProperty("Title")
private String title;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("Id")
public String getId() {
return id;
}

@JsonProperty("Id")
public void setId(String id) {
this.id = id;
}

@JsonProperty("Title")
public String getTitle() {
return title;
}

@JsonProperty("Title")
public void setTitle(String title) {
this.title = title;
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
