package ir.anijuu.products.repository;

import ir.anijuu.products.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for the User entity.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findOneByActivationKey(String activationKey);

    List<User> findAllByActivatedIsFalseAndCreatedDateBefore(ZonedDateTime dateTime);


    Optional<User> findOneByResetKey(String resetKey);

    Optional<User> findOneByEmail(String email);

    Optional<User> findOneByLogin(String login);
    User findOneByHashId(String hashId);

    Optional<User> findOneById(Long userId);

    @Override
    void delete(User t);

}
