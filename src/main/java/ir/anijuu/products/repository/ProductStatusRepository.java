package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductStatus;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductStatus entity.
 */
@SuppressWarnings("unused")
public interface ProductStatusRepository extends JpaRepository<ProductStatus,Long> {

}
