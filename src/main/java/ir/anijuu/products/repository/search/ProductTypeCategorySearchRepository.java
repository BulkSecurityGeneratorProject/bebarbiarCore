package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductTypeCategory;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductTypeCategory entity.
 */
public interface ProductTypeCategorySearchRepository extends ElasticsearchRepository<ProductTypeCategory, Long> {
}
