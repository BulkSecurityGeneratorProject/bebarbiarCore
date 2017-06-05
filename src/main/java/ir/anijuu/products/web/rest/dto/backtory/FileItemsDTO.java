package ir.anijuu.products.web.rest.dto.backtory;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by M_Bahrevar on 7/5/2016.
 */
public class FileItemsDTO {
    private List<FileItemDTO> fileitems;

    public FileItemsDTO() {
        fileitems = new ArrayList<>();
    }

    public List<FileItemDTO> getFileitems() {
        return fileitems;
    }

    public void setFileitems(List<FileItemDTO> fileitems) {
        this.fileitems = fileitems;
    }
}
