package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.StartupModal;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the StartupModal entity.
 */
public interface StartupModalSearchRepository extends ElasticsearchRepository<StartupModal, Long> {
}
