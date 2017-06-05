package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.SearchTracker;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the SearchTracker entity.
 */
public interface SearchTrackerSearchRepository extends ElasticsearchRepository<SearchTracker, Long> {
}
