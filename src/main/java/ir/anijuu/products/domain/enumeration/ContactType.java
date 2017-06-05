package ir.anijuu.products.domain.enumeration;

/**
 * The ContactType enumeration.
 */
public enum ContactType {
    INSTAGRAM("http://instagram.com/","instagram.png","صفحه ی اینستاگرام"),
    FACEBOOK("fabcbook:","",""),
    GOOGLEPLUS("","",""),
    TELEGRAM("http://telegram.me/","telegram.png","ارسال پیام"),
    MOBILE("tel:","phone.png","تماس با"),
    ADDRESS("","address.png","آدرس");
    private String name;
    private String icon;
    private String description;

    ContactType(String name, String icon, String description) {
        this.name = name;
        this.icon = icon;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
