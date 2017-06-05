package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductTypeStatus;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductTypeStatus entity.
 */
@SuppressWarnings("unused")
public interface ProductTypeStatusRepository extends JpaRepository<ProductTypeStatus,Long> {

    ProductTypeStatus getByCode(String code);

}
