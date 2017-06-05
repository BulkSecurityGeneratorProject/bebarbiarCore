package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductStatusHistory;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductStatusHistory entity.
 */
@SuppressWarnings("unused")
public interface ProductStatusHistoryRepository extends JpaRepository<ProductStatusHistory,Long> {

}
