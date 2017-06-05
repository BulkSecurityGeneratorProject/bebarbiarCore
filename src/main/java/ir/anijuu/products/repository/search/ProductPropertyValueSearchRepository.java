package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductPropertyValue;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductPropertyValue entity.
 */
public interface ProductPropertyValueSearchRepository extends ElasticsearchRepository<ProductPropertyValue, Long> {
}
