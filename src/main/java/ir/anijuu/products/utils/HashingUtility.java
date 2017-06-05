package ir.anijuu.products.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Created by M_Bahrevar on 7/3/2016.
 */

public class HashingUtility {
    public static String md5Hash(String input) {
        String generatedPassword = null;
        try {
            // Create MessageDigest instance for MD5
            MessageDigest md = MessageDigest.getInstance("MD5");
            //Add password bytes to digest
            md.update(input == null ? new byte[0] : input.getBytes());
            //Get the hash's bytes
            byte[] bytes = md.digest();
            //This bytes[] has bytes in decimal format;
            //Convert it to hexadecimal format
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < bytes.length; i++) {
                sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }
            //Get complete hashed password in hex format
            generatedPassword = sb.toString();
        } catch (NoSuchAlgorithmException e) {

        }
        return generatedPassword;
    }

    public static int GetSimpleHash(String input, int hashCount) {
        if (input == null || input.trim().equalsIgnoreCase("")) {
            throw new RuntimeException("String cannot be null");
        }

        int result = 0;
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            result = (result + (int) ch) % hashCount;
        }

        return result;
    }

}
