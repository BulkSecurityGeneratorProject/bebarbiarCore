package ir.anijuu.products.repository.search;

import ir.anijuu.products.domain.CommentLike;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the CommentLike entity.
 */
public interface CommentLikeSearchRepository extends ElasticsearchRepository<CommentLike, Long> {
}
