package ir.anijuu.products.web.rest.dto;

import ir.anijuu.products.domain.Product;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by M_Bahrevar on 11/1/2016.
 */
public class SearchResultDTO {

List<ProductDTO> firstList= new ArrayList<>();
List<ProductDTO> secondList=new ArrayList<>();

    public List<ProductDTO> getFirstList() {
        return firstList;
    }

    public void setFirstList(List<ProductDTO> firstList) {
        this.firstList = firstList;
    }

    public List<ProductDTO> getSecondList() {
        return secondList;
    }

    public void setSecondList(List<ProductDTO> secondList) {
        this.secondList = secondList;
    }
}
