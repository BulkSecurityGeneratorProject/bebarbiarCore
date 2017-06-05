package ir.anijuu.products.web.rest.dto.farzad;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by farzad on 4/30/16.
 */
public class HolderQuickSearch implements Serializable{
    List<KeyValues> products= new ArrayList<>();
    List<KeyValues> shops= new ArrayList<>();
    List<KeyValues> productType= new ArrayList<>();




    public static class KeyValues implements Serializable{
        public   String name;
        public   Long value;
        public   String type;

        public KeyValues(String name, Long value) {
            this.name = name;
            this.value = value;
        }

        public KeyValues(String name, Long value, String type) {
            this.name = name;
            this.value = value;
            this.type = type;
        }
    }

    public List<KeyValues> getProductType() {
        return productType;
    }

    public void setProductType(List<KeyValues> productType) {
        this.productType = productType;
    }

    public List<KeyValues> getProducts() {
        return products;
    }

    public void setProducts(List<KeyValues> products) {
        this.products = products;
    }


    public List<KeyValues> getShops() {
        return shops;
    }

    public void setShops(List<KeyValues> shops) {
        this.shops = shops;
    }
}

