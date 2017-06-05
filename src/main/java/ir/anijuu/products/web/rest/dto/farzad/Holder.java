package ir.anijuu.products.web.rest.dto.farzad;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by farzad on 4/30/16.
 */
public class Holder implements Serializable{
    public   boolean isMenu;
    public   List<Card> cards;
    public   List<Menu> menus;
    public  String token;
    public  String pic;
    public  String fontIcons;


    public boolean isMenu() {
        return isMenu;
    }

    public void setIsMenu(boolean isMenu) {
        this.isMenu = isMenu;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    public List<Menu> getMenus() {
        return menus;
    }

    public void setMenus(List<Menu> menus) {
        this.menus = menus;
    }

    public static class Menu  implements Serializable{
        public String url;
        public String title;
        public boolean isShop;
        public String pin;
        public String color;
        public   long id;

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getColor() {
            return color;
        }

        public void setColor(String color) {
            this.color = color;
        }

        public String getPin() {
            return pin;
        }

        public void setPin(String pin) {
            this.pin = pin;
        }
    }
    public static class Card implements Serializable{
        public      String name;
        public   String title;
        public   String icon;
        public   String header;
        public   String type;
        public   String values;
        public List<Card> cards = new ArrayList<>();
        public   boolean isThree;

        public List<Card> getCards() {
            return cards;
        }

        public void setCards(List<Card> cards) {
            this.cards = cards;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getIcon() {
            return icon;
        }

        public void setIcon(String icon) {
            this.icon = icon;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public String getValues() {
            return values;
        }

        public void setValues(String values) {
            this.values = values;
        }
    }




}

