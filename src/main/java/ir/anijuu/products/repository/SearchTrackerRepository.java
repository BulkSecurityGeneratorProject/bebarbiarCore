package ir.anijuu.products.repository;

import ir.anijuu.products.domain.SearchTracker;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the SearchTracker entity.
 */
@SuppressWarnings("unused")
public interface SearchTrackerRepository extends JpaRepository<SearchTracker,Long> {

    @Query("select searchTracker from SearchTracker searchTracker where searchTracker.user.login = ?#{principal.username}")
    List<SearchTracker> findByUserIsCurrentUser();

}
