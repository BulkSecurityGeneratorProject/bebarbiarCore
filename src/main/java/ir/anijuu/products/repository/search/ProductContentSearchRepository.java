package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductContent;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductContent entity.
 */
public interface ProductContentSearchRepository extends ElasticsearchRepository<ProductContent, Long> {
}
