package ir.anijuu.products.utils;

import org.elasticsearch.common.unit.DistanceUnit;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.query.RangeQueryBuilder;

/**
 * Created by m_bahrevar on 11/9/2016.
 */
public class ElasticUtils {

    public static QueryBuilder productPropertyStatic(String type, String value) {
        return QueryBuilders.matchQuery(type, value);
    }

    public static String getSelectedFiled() {
        StringBuilder result = new StringBuilder();
        result.append("\"_source\" :[");
        result.append("\"shop.name\",\"id\",\"title\",\"shop.logo\",\"shop.address\",\"shop.location\"");
        result.append("]");
        return result.toString();
    }

    public static QueryBuilder productPropertyNumber(String type, Long from, Long to) {
        RangeQueryBuilder queryBuilder = QueryBuilders.rangeQuery(type);

        if (from != null)
            queryBuilder.from(from);
        if (to != null)
            queryBuilder.to(to);

        return queryBuilder;
    }

    public static QueryBuilder productPropertyDistance(double lat, double lang, long distance) {
        return QueryBuilders.geoDistanceQuery("shop.location").point(lat, lang).distance(distance, DistanceUnit.KILOMETERS);
    }

    public static QueryBuilder productPropertyCheck(String type, String... values) {
        BoolQueryBuilder queryBuilder = QueryBuilders.boolQuery();
        for (String value : values) {
            BoolQueryBuilder innerBuilder = QueryBuilders.boolQuery();
            innerBuilder.must(QueryBuilders.termQuery("propertyValues.productProperty.identifier", type)).must(QueryBuilders.termQuery("propertyValues.value", value));
            queryBuilder.should(innerBuilder);
        }
        return queryBuilder;
    }

    public static String getPagination(Long from, Integer size) {
        return "\"from\" : " + from*10 + ",\"size\" :" + size;
    }

    public static String getDistanceByLocation(String lat,String lon){
        String sort = " \"sort\" : [\n" +
            "        {\n" +
            "            \"_geo_distance\" : {\n" +
            "                \"shop.location\" : ["+lon+","+ lat+"],\n" +
            "                \"order\" : \"asc\",\n" +
            "                \"unit\" : \"m\"\n" +
            "            }\n" +
            "        }\n" +
            "    ]";
        return  sort ;
    }


}
