package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductTrust;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductTrust entity.
 */
@SuppressWarnings("unused")
public interface ProductTrustRepository extends JpaRepository<ProductTrust,Long> {

    @Query("select productTrust from ProductTrust productTrust where productTrust.user.login = ?#{principal.username}")
    List<ProductTrust> findByUserIsCurrentUser();

}
