package ir.anijuu.products.web.rest.farzad;

import com.codahale.metrics.annotation.Timed;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ir.anijuu.products.domain.Comment;
import ir.anijuu.products.domain.CommentLike;
import ir.anijuu.products.domain.User;
import ir.anijuu.products.domain.enumeration.CommentStatus;
import ir.anijuu.products.repository.*;
import ir.anijuu.products.security.SecurityUtils;
import ir.anijuu.products.utils.CalendarUtil;
import ir.anijuu.products.web.rest.dto.farzad.CommentDTO;
import ir.anijuu.products.web.rest.dto.farzad.CommentLikeDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FarzaCommentService {

    @Inject
    private ProductRepository productRepository;
    @Inject
    private UserRepository userRepository;
    @Inject
    private CommentRepository commentRepository;

    @Inject
    private CommentLikeRepository commentLikeRepository;

    @RequestMapping(value = "/1/comment", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")

    public ResponseEntity<?> commentList(@Valid @RequestBody String data, HttpServletResponse response) {
        String[] a = data.split(",");

        try {
            CommentDTO commentDTO = new CommentDTO();
            List<CommentDTO.Comment> comments1 = new ArrayList<>();
            Page<Comment> comments = commentRepository.searchWithProductId(Long.valueOf(a[0]), CommentStatus.ACTIVE, new PageRequest(Integer.valueOf(a[1]), 10));
            User user = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin()).get();
            for (Comment comment : comments) {
                CommentDTO.Comment comment1 = new CommentDTO.Comment();
                comment1.date = CalendarUtil.convertGregorianToPersian(comment.getSubmitDate().toLocalDate().toString());
                comment1.description = comment.getMessage();
                comment1.hits = String.valueOf(comment.getLikes());
                comment1.name = comment.getUser().getName();
                comment1.id = String.valueOf(comment.getId());
                CommentLike commentLike = commentLikeRepository.findByUserAndComment(user, comment);
                if (commentLike != null) {
                    comment1.loved = true;
                }
                comments1.add(comment1);
            }
            commentDTO.comments = comments1;
            return ResponseEntity.ok(new ObjectMapper().writeValueAsString(commentDTO));
        } catch (
            AuthenticationException exception
            )

        {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", exception.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        } catch (
            JsonProcessingException e
            )

        {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", e.getLocalizedMessage()), HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/1/createComment", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> createComment(@Valid @RequestBody CommentLikeDTO commentLikeDTO, HttpServletResponse response) {
        Comment comment = new Comment();
        comment.setLikes(0l);
        comment.setMessage(commentLikeDTO.comment);
        comment.setProduct(productRepository.findById(commentLikeDTO.productId));
        comment.setUser(userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin()).get());
        comment.setSubmitDate(CalendarUtil.getNowDateTimeOfIran());
        commentRepository.save(comment);
        return ResponseEntity.ok("200");

    }

    @RequestMapping(value = "/1/likeComment", method = RequestMethod.POST)
    @Timed
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> likeComment(@Valid @RequestBody String param, HttpServletResponse response) {
        String[] a = param.split(",");
        Comment comment = commentRepository.findOne(Long.valueOf(a[0]));
        if (Boolean.valueOf(a[1])) {
            User user = comment.getUser();
            userRepository.save(user);
            comment.setLikes(comment.getLikes() + 1);
            CommentLike commentLike = new CommentLike();
            commentLike.setUser(userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin()).get());
            commentLike.setComment(comment);
            commentLike.setDateOfLike(CalendarUtil.getNowDateTimeOfIran());
            commentLikeRepository.save(commentLike);
        } else {
            comment.setLikes(comment.getLikes() - 1);
            commentLikeRepository.delete(commentLikeRepository.findByUserAndComment(comment.getUser(), comment));

        }
        commentRepository.save(comment);

        return ResponseEntity.ok("200");

    }
}
