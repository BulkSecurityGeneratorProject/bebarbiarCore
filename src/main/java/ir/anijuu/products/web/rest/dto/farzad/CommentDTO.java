package ir.anijuu.products.web.rest.dto.farzad;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.Serializable;
import java.util.List;

/**
 * Created by farzad on 4/30/16.
 */
public class CommentDTO implements Serializable {


    public List<Comment>  comments;

    public static class Comment implements Serializable{
        public String name;
        public String description;
        public String hits;
        public boolean loved=false;
        public String id;
        public String date;
    }


}

