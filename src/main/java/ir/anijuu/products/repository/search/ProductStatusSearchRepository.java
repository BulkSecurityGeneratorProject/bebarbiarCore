package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductStatus;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductStatus entity.
 */
public interface ProductStatusSearchRepository extends ElasticsearchRepository<ProductStatus, Long> {
}
