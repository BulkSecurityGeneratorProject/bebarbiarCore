package ir.anijuu.products.web.rest.dto.farzad;

import java.io.Serializable;

/**
 * Created by farzad on 4/25/2017.
 */
public class KeyValueDTO implements Serializable {
    public String key;
    public Long value;

    public KeyValueDTO(String key, Long value) {
        this.key = key;
        this.value = value;
    }
}
