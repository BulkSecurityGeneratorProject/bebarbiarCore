package ir.anijuu.products.repository;

import ir.anijuu.products.domain.Product;
import ir.anijuu.products.domain.User;
import ir.anijuu.products.domain.UserRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Spring Data JPA repository for the UserRate entity.
 */
@SuppressWarnings("unused")
public interface UserRateRepository extends JpaRepository<UserRate,Long> {

    @Query("select userRate from UserRate userRate where userRate.user.login = ?#{principal.username}")
    List<UserRate> findByUserIsCurrentUser();

    UserRate findByUserAndProduct(User user, Product product);
    Long countByProduct(Product product);
    List<UserRate> findByProduct(Product product);


}
