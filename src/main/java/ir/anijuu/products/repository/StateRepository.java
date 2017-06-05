package ir.anijuu.products.repository;

import ir.anijuu.products.domain.State;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the State entity.
 */
@SuppressWarnings("unused")
public interface StateRepository extends JpaRepository<State,Long> {
    public State findByName(String name);

}
