package ir.anijuu.products.web.rest.dto.farzad;

import ir.anijuu.products.utils.ConstantPool;

import java.io.Serializable;
import java.util.List;

/**
 * Created by farzad on 4/30/16.
 */
public class HolderNew implements Serializable{
    public   List<NewTypes> newTypes;
    public  String fontIcons= ConstantPool.FONT_ICON;




    public static class NewTypes implements Serializable{
        public   String name;
        public   String value;


    }




}

