package ir.anijuu.products.repository;

import ir.anijuu.products.domain.Proposition;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Proposition entity.
 */
@SuppressWarnings("unused")
public interface PropositionRepository extends JpaRepository<Proposition,Long> {

    @Query("select proposition from Proposition proposition where proposition.user.login = ?#{principal.username}")
    List<Proposition> findByUserIsCurrentUser();

}
