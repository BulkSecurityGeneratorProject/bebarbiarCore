package ir.anijuu.products.web.rest.farzad;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kavenegar.sdk.KavenegarApi;
import ir.anijuu.products.domain.Product;
import ir.anijuu.products.domain.ProductProperty;
import ir.anijuu.products.domain.ProductPropertyValue;
import java.util.TimerTask;

/**
 * Created by farzad on 4/28/2017.
 */
public class WelcomeCall extends TimerTask {
    String mobile;
    String token;
    String token2;
    String token3;

    public WelcomeCall(String mobile, String token, String token2) {
        this.token = token;
        this.token2 = token2;
        this.mobile = mobile;
    }

    @Override
    public void run() {
        KavenegarApi api = new KavenegarApi("5635717141617A52534F636F49546D38454E647870773D3D");

        if(token.contains("a")||token2.contains("a")||token.contains("e")||token2.contains("e")){
            if (token.contains(" ")) {
                String[] s = token.split(" ");
                token = s[0];
                token3 = s[1];
                api.verifyLookup(mobile, token, token3, token2, "signupEN");
            } else if (token2.contains(" ")) {
                String[] s = token2.split(" ");
                token2 = s[0];
                token3 = s[1];
                api.verifyLookup(mobile, token, token2, token3, "signupEN");
            } else {
                api.verifyLookup(mobile, token, token2, "", "signupEN");
            }
        }else {
            if (token.contains(" ")) {
                String[] s = token.split(" ");
                token = s[0];
                token3 = s[1];
                api.verifyLookup(mobile, token, token3, token2, "signup");
            } else if (token2.contains(" ")) {
                String[] s = token2.split(" ");
                token2 = s[0];
                token3 = s[1];
                api.verifyLookup(mobile, token, token2, token3, "signup");
            } else {
                api.verifyLookup(mobile, token, token2, "", "signup");
            }
        }
    }
//
//    public static void main(String[] args) {
//
//        Map<String,String> films= new HashMap<>();
//        String folder="/home/farzad/Downloads/CinemaTicket/";
//        try {
//            String s = new String(Files.readAllBytes(Paths.get("/home/farzad/Downloads/CinemaTicket/Films")));
//            String[] splited = s.split("\n");
//
//            for (String s1 : splited) {
//                String[] ss = s1.split("\\$");
//                films.put(ss[0],ss[1]+","+ss[2]);
//            }
//            System.out.println();
//            System.out.println();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        String s = null;
//        try {
//            s = new String(Files.readAllBytes(Paths.get("/home/farzad/Downloads/CinemaTicket/CinemaSance-online")));
//            String[] splited = s.split("\n");
//            for (String s1 : splited) {
//                String[] ss = s1.split("\\$");
//                Product p = new Product();
//                p.setTitle(films.get(ss[0]).split(",")[1]);
//                Shop shop=new Shop();//find ss[1]
//                p.setDescription(ss[4]);
//                p.setShop(shop);
//                //save product
//                ProductProperty productProperty= new ProductProperty();//find sans 31
//                ProductPropertyValue productPropertyValue= new ProductPropertyValue();
//                productPropertyValue.setValue(ss[3]);
//                productPropertyValue.setProduct(p);
//                productPropertyValue.setProductProperty(productProperty);
//
//
//                ProductProperty productProperty1= new ProductProperty();//find name 32
//                ProductPropertyValue productPropertyValue1= new ProductPropertyValue();
//                productPropertyValue1.setValue(p.getTitle());
//                productPropertyValue1.setProduct(p);
//                productPropertyValue1.setProductProperty(productProperty1);
//
//            }
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//
//    }


}


