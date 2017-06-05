package ir.anijuu.products.web.rest.dto;

import com.fasterxml.jackson.annotation.JsonCreator;

public class NewPlaceDTO {

    private String title;
    private String adr;
    private String tel;
    private long cat;
    private double lat;
    private double lon;

    public NewPlaceDTO(String title, double lat, double lon) {
        this.title = title;
        this.lat = lat;
        this.lon = lon;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAdr() {
        return adr;
    }

    public void setAdr(String adr) {
        this.adr = adr;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public long getCat() {
        return cat;
    }

    public void setCat(long cat) {
        this.cat = cat;
    }

    @JsonCreator
    public NewPlaceDTO() {
    }

}
