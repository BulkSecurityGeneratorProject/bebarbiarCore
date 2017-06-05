package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.RateInfo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the RateInfo entity.
 */
public interface RateInfoSearchRepository extends ElasticsearchRepository<RateInfo, Long> {
}
