package ir.anijuu.products.web.rest.dto.fidilio.aa;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;

public class OverAllScores {

@JsonProperty("TooExcelent")
private Integer tooExcelent;
@JsonProperty("Excelent")
private Integer excelent;
@JsonProperty("Good")
private Integer good;
@JsonProperty("Bad")
private Integer bad;
@JsonProperty("VeryBad")
private Integer veryBad;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("TooExcelent")
public Integer getTooExcelent() {
return tooExcelent;
}

@JsonProperty("TooExcelent")
public void setTooExcelent(Integer tooExcelent) {
this.tooExcelent = tooExcelent;
}

@JsonProperty("Excelent")
public Integer getExcelent() {
return excelent;
}

@JsonProperty("Excelent")
public void setExcelent(Integer excelent) {
this.excelent = excelent;
}

@JsonProperty("Good")
public Integer getGood() {
return good;
}

@JsonProperty("Good")
public void setGood(Integer good) {
this.good = good;
}

@JsonProperty("Bad")
public Integer getBad() {
return bad;
}

@JsonProperty("Bad")
public void setBad(Integer bad) {
this.bad = bad;
}

@JsonProperty("VeryBad")
public Integer getVeryBad() {
return veryBad;
}

@JsonProperty("VeryBad")
public void setVeryBad(Integer veryBad) {
this.veryBad = veryBad;
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
