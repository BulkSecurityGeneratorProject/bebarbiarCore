package ir.anijuu.products.web.rest.dto;

/**
 * A DTO representing a user's credentials
 */
public class SearchDTO {

    private String from;
    private String to;
    private String state;
    private int catId;

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getCatId() {
        return catId;
    }

    public void setCatId(int catId) {
        this.catId = catId;
    }


}
