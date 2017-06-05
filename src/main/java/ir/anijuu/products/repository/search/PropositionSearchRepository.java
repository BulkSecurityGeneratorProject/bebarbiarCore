package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.Proposition;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Proposition entity.
 */
public interface PropositionSearchRepository extends ElasticsearchRepository<Proposition, Long> {
}
