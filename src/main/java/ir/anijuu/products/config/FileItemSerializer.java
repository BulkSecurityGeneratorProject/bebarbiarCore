package ir.anijuu.products.config;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import ir.anijuu.products.web.rest.dto.backtory.FileItemDTO;

import java.io.IOException;

/**
 * Created by M_Bahrevar on 7/5/2016.
 */


public class FileItemSerializer extends JsonSerializer<FileItemDTO> {

    @Override
    public void serialize(FileItemDTO fileItemDTO, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {

/*jgen.writeStartObject();
jgen.writeFieldName("fileToUpload");
        for (byte b : bytes) {
            jgen.writeBinaryField(unsignedToBytes(b));
        }

        jgen.writeEndObject();

    }*/
        /*jgen.writeStartArray();
        jgen.writeBinaryField("fileToUpload",bytes );*/
        jgen.writeStartObject();
        jgen.writeFieldName("fileToUpload");
        jgen.writeRawValue(bytesToHex(fileItemDTO.getFileToUpload()));
        jgen.writeObjectField("filename", fileItemDTO.getFileName());
        jgen.writeBooleanField("replacing", fileItemDTO.isReplacing());
        jgen.writeBooleanField("extract", fileItemDTO.isExtract());
        jgen.writeStringField("path", fileItemDTO.getPath());
        jgen.writeEndObject();
       /* jgen.writeFieldName("fileToUpload");
        *//*jgen.writeRawUTF8String(bytes, 0, bytes.length);*//*
        jgen.writeRawValue(bytesToHex(bytes));*/
        /*for (byte b : bytes) {
            jgen.writeNumber(unsignedToBytes(b));
        }*/


    }

    public static String bytesToHex(byte[] bytes) {
        final char[] hexArray = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
        char[] hexChars = new char[bytes.length * 2];
        int v;
        for (int j = 0; j < bytes.length; j++) {
            v = bytes[j] & 0xFF;
            hexChars[j * 2] = hexArray[v >>> 4];
            hexChars[j * 2 + 1] = hexArray[v & 0x0F];
        }
        return new String(hexChars);
    }

    private static int unsignedToBytes(byte b) {
        return b & 0xFF;
    }

}
