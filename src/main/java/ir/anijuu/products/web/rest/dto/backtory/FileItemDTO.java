package ir.anijuu.products.web.rest.dto.backtory;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import ir.anijuu.products.config.FileItemSerializer;

import java.io.Serializable;

/**
 * Created by M_Bahrevar on 7/3/2016.
 */
@JsonSerialize(using= FileItemSerializer.class)
public class FileItemDTO implements Serializable {


    private byte[] fileToUpload;
    private String fileName;
    private boolean replacing = true;
    private boolean extract = false;
    private String path;



    public FileItemDTO(byte[] fileToUpload, boolean replacing, String path,String fileName) {
        this.fileToUpload = fileToUpload;
        this.replacing = replacing;
        this.extract = false;
        this.path = path;
        this.fileName=fileName;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getFileToUpload() {
        return fileToUpload;
    }

    public void setFileToUpload(byte[] fileToUpload) {
        this.fileToUpload = fileToUpload;
    }

    public boolean isReplacing() {
        return replacing;
    }

    public void setReplacing(boolean replacing) {
        this.replacing = replacing;
    }

    public boolean isExtract() {
        return extract;
    }

    public void setExtract(boolean extract) {
        this.extract = extract;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
