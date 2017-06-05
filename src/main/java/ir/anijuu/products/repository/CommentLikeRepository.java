package ir.anijuu.products.repository;

import ir.anijuu.products.domain.Comment;
import ir.anijuu.products.domain.CommentLike;

import ir.anijuu.products.domain.User;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the CommentLike entity.
 */
@SuppressWarnings("unused")
public interface CommentLikeRepository extends JpaRepository<CommentLike,Long> {

    @Query("select commentLike from CommentLike commentLike where commentLike.user.login = ?#{principal.username}")
    List<CommentLike> findByUserIsCurrentUser();
    CommentLike findByUserAndComment(User user,Comment comment);

}
