package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.ProductDiscount;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the ProductDiscount entity.
 */
public interface ProductDiscountSearchRepository extends ElasticsearchRepository<ProductDiscount, Long> {
}
