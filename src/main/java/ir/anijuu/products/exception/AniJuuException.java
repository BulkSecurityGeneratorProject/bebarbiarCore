package ir.anijuu.products.exception;

/**
 * Created by M_Bahrevar on 7/3/2016.
 */
public class AniJuuException extends RuntimeException{
    private String message;

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
