package ir.anijuu.products.web.rest.dto.farzad;

import java.util.ArrayList;
import java.util.List;

/**
 * A DTO representing a user's credentials
 */
public class UserRatingDTO {
    public User user;
    public String sponsor;
    public List<User> users = new ArrayList<>();
    public Boolean change;
    public String help="<div style=\"direction: rtl;padding-top: 20px;line-height: 3em\"><i class=\"icon ion-checkmark\"\n" +
        "                                                                  style=\"color: #F06A21;font-size: xx-large\"></i>\n" +
        "  <span class=\"myText\">شما می توانید با لمس</span><i class=\"icon icon-12\"\n" +
        "                                                     style=\"color: #F06A21;font-size: xx-large\"></i><span\n" +
        "    class=\"myText\">در قسمت پایین و انتخاب</span><i style=\"color: #F06A21;font-size: xx-large\"\n" +
        "                                                   class=\"icon icon-9\"></i><span class=\"myText\">و تعریف محل جدید، 10 امتیاز کسب کنید.</span>\n" +
        "</div>\n" +
        "<div style=\"direction: rtl;padding-top: 20px;line-height: 3em\"><i class=\"icon ion-checkmark\"\n" +
        "                                                                  style=\"color: #F06A21;font-size: xx-large\"></i>\n" +
        "  <span\n" +
        "    class=\"myText\">شما می توانید با کامنت گذاشتن در صفحه هر محصول یا فروشگاه، پس از تایید، 5 امتیاز کسب کنید.</span>\n" +
        "</div>";

    public UserRatingDTO() {
    }

    public class User {
        public User() {
        }

        private String username;
        private String lastName;
        private String firstName;
        private String rating;
        private String ranking;
        private String pic;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getRating() {
            return rating;
        }

        public void setRating(String rating) {
            this.rating = rating;
        }

        public String getRanking() {
            return ranking;
        }

        public void setRanking(String ranking) {
            this.ranking = ranking;
        }

        public String getPic() {
            return pic;
        }

        public void setPic(String pic) {
            this.pic = pic;
        }
    }


}
