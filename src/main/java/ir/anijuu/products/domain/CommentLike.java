package ir.anijuu.products.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A CommentLike.
 */
@Entity
@Table(name = "comment_like")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class CommentLike implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "date_of_like", nullable = false)
    private ZonedDateTime dateOfLike;

    @ManyToOne
    @NotNull
    private User user;

    @ManyToOne
    @NotNull
    private Comment comment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getDateOfLike() {
        return dateOfLike;
    }

    public void setDateOfLike(ZonedDateTime dateOfLike) {
        this.dateOfLike = dateOfLike;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CommentLike commentLike = (CommentLike) o;
        if(commentLike.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, commentLike.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "CommentLike{" +
            "id=" + id +
            ", dateOfLike='" + dateOfLike + "'" +
            '}';
    }
}
