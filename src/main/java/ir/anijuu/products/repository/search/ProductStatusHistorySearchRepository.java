package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductStatusHistory;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductStatusHistory entity.
 */
public interface ProductStatusHistorySearchRepository extends ElasticsearchRepository<ProductStatusHistory, Long> {
}
