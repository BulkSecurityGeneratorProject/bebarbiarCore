package ir.anijuu.products.service;

import ir.anijuu.products.domain.enumeration.CommentStatus;
import ir.anijuu.products.repository.CommentRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Inject;

/**
 * Created by Majid-Pc on 3/19/2017.
 */
@Service
@Transactional
public class CommentServiceImpl {
    private final Logger log = LoggerFactory.getLogger(CommentServiceImpl.class);

    @Inject
    private CommentRepository commentRepository;

    public void changeStatus(long comment, CommentStatus commentStatus) {
        commentRepository.setStatusForComment(comment, commentStatus);
    }


}
