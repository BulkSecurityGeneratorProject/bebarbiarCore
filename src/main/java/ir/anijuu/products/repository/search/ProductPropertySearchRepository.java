package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductProperty;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductProperty entity.
 */
public interface ProductPropertySearchRepository extends ElasticsearchRepository<ProductProperty, Long> {
}
