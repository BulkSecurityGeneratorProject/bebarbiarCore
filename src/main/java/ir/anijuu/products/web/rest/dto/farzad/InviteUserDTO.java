package ir.anijuu.products.web.rest.dto.farzad;

import java.io.Serializable;

/**
 * Created by farzad on 4/25/2017.
 */
public class InviteUserDTO implements Serializable {
    public  String myKey;
    public String  firstKey;
    public String  secondKey;
    public String  thirdKey;

    public InviteUserDTO() {
    }

    public InviteUserDTO(String myKey, String firstKey, String secondKey, String thirdKey) {
        this.myKey = myKey;
        this.firstKey = firstKey;
        this.secondKey = secondKey;
        this.thirdKey = thirdKey;
    }
}
