package ir.anijuu.products.repository;

import ir.anijuu.products.domain.Comment;
import ir.anijuu.products.domain.Product;
import ir.anijuu.products.domain.enumeration.CommentStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Comment entity.
 */
@SuppressWarnings("unused")
public interface CommentRepository extends JpaRepository<Comment,Long> {


    @Query("select comment from Comment comment where comment.user.login = ?#{principal.username}")
    List<Comment> findByUserIsCurrentUser();
    @Query("select comment from Comment comment where comment.product.id = :id and comment.status= :status ")
    Page<Comment> searchWithProductId(@Param("id") long id,@Param("status") CommentStatus status, Pageable pageable);

     long count();
     long countByProduct(Product product);

    @Modifying
    @Query("update Comment  set status = :status where id = :id")
    int setStatusForComment( @Param("id") Long id,@Param("status") CommentStatus status);

}
