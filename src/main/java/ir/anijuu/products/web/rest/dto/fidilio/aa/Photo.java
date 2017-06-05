package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Photo {

@JsonProperty("PhotosUrls")
private List<String> photosUrls = null;
@JsonProperty("PhotosInstagaram")
private List<Object> photosInstagaram = null;
@JsonProperty("PhotosFidiplus")
private List<Object> photosFidiplus = null;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("PhotosUrls")
public List<String> getPhotosUrls() {
return photosUrls;
}

@JsonProperty("PhotosUrls")
public void setPhotosUrls(List<String> photosUrls) {
this.photosUrls = photosUrls;
}

@JsonProperty("PhotosInstagaram")
public List<Object> getPhotosInstagaram() {
return photosInstagaram;
}

@JsonProperty("PhotosInstagaram")
public void setPhotosInstagaram(List<Object> photosInstagaram) {
this.photosInstagaram = photosInstagaram;
}

@JsonProperty("PhotosFidiplus")
public List<Object> getPhotosFidiplus() {
return photosFidiplus;
}

@JsonProperty("PhotosFidiplus")
public void setPhotosFidiplus(List<Object> photosFidiplus) {
this.photosFidiplus = photosFidiplus;
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
