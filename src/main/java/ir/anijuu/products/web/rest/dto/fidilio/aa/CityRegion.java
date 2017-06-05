package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;

public class CityRegion {

@JsonProperty("Id")
private String id;
@JsonProperty("Name")
private String name;
@JsonProperty("UrbanDistrict")
private Integer urbanDistrict;
@JsonProperty("GeoLocation")
private Integer geoLocation;
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

@JsonProperty("Name")
public String getName() {
return name;
}

@JsonProperty("Name")
public void setName(String name) {
this.name = name;
}

@JsonProperty("UrbanDistrict")
public Integer getUrbanDistrict() {
return urbanDistrict;
}

@JsonProperty("UrbanDistrict")
public void setUrbanDistrict(Integer urbanDistrict) {
this.urbanDistrict = urbanDistrict;
}

@JsonProperty("GeoLocation")
public Integer getGeoLocation() {
return geoLocation;
}

@JsonProperty("GeoLocation")
public void setGeoLocation(Integer geoLocation) {
this.geoLocation = geoLocation;
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
