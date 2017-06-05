package ir.anijuu.products.domain.enumeration;

/**
 * Created by farzad on 2/27/2017.
 */
public enum ColorEnum {
    C1("#3AD84D"), C2("#2B75A6"), C3("#F7B32C"), C4("#D05DBA"), C5("#423DDF"), C6("#686868"), C7("#A2896B"), C8("#41BDD9"), C9("#CF533B"), C10("#F27C32"), C11("#A64CC8"), C12("#87CA49"), C13("#A37C6B"), C14("#AA2C2F"), C15("#2BB18E"), C16("#F58D8E"), C17("#999D6B"), C18("#A9A9A9"), C19("#F6C053"), C20("#951C8F"),C21("#3AD84D");
    private String code;

    ColorEnum(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
