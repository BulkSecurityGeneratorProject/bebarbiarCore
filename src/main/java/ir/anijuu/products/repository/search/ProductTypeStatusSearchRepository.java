package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductTypeStatus;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductTypeStatus entity.
 */
public interface ProductTypeStatusSearchRepository extends ElasticsearchRepository<ProductTypeStatus, Long> {
}
