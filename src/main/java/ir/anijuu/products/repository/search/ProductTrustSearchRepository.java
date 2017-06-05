package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductTrust;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductTrust entity.
 */
public interface ProductTrustSearchRepository extends ElasticsearchRepository<ProductTrust, Long> {
}
