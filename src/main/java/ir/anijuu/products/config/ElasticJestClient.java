package ir.anijuu.products.config;

import io.searchbox.client.JestClient;
import io.searchbox.client.JestClientFactory;
import io.searchbox.client.config.HttpClientConfig;
import org.springframework.cloud.cloudfoundry.com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by M_Bahrevar on 10/25/2016.
 */
@Configuration
public class ElasticJestClient {
    @Bean(name = "jClient")
    public JestClient jestClient() throws Exception {

        // Using jackson to parse VCAP_SERVICES
      /*  Map result = new ObjectMapper().readValue(System.getenv("VCAP_SERVICES"), HashMap.class);

        String connectionUrl = (String) ((Map) ((Map) ((List)
            result.get("searchly")).get(0)).get("credentials")).get("uri");*/
        // Configuration
      /*  ClientConfig clientConfig = new ClientConfig.Builder(connectionUrl).multiThreaded(true).build();*/
        //for test
        String connectionUrl = "http://cloudfoundry:40cce7c5067f029177fba9f0d1948fad@dori-us-east-1.searchly.com";
        HttpClientConfig clientConfig = new HttpClientConfig.Builder(connectionUrl).multiThreaded(true).build();

        // Construct a new Jest client according to configuration via factory
        JestClientFactory factory = new JestClientFactory();
        factory.setHttpClientConfig(clientConfig);
        return factory.getObject();
    }
}


