package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductPropertyCategory;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductPropertyCategory entity.
 */
public interface ProductPropertyCategorySearchRepository extends ElasticsearchRepository<ProductPropertyCategory, Long> {
}
