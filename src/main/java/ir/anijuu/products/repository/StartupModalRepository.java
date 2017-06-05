package ir.anijuu.products.repository;

import ir.anijuu.products.domain.StartupModal;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the StartupModal entity.
 */
@SuppressWarnings("unused")
public interface StartupModalRepository extends JpaRepository<StartupModal,Long> {

}
