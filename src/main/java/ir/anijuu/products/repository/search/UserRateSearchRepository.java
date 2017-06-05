package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.UserRate;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the UserRate entity.
 */
public interface UserRateSearchRepository extends ElasticsearchRepository<UserRate, Long> {
}
