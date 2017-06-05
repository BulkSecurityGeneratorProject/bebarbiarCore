package ir.anijuu.products.config;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

/**
 * Created by M_Bahrevar on 7/5/2016.
 */



public class ByteArraySerializer extends JsonSerializer<byte[]> {

    @Override
    public void serialize(byte[] bytes, JsonGenerator jgen,
                          SerializerProvider provider) throws IOException,
        JsonProcessingException {
        jgen.writeStartArray();

        for (byte b : bytes) {
            jgen.writeNumber(unsignedToBytes(b));
        }

        jgen.writeEndArray();

    }

    private static int unsignedToBytes(byte b) {
        return b & 0xFF;
    }

}
