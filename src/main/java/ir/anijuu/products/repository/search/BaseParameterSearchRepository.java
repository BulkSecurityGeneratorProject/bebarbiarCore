package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.BaseParameter;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the BaseParameter entity.
 */
public interface BaseParameterSearchRepository extends ElasticsearchRepository<BaseParameter, Long> {
}
