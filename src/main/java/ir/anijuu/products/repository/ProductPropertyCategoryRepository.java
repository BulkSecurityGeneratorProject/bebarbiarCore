package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductPropertyCategory;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductPropertyCategory entity.
 */
@SuppressWarnings("unused")
public interface ProductPropertyCategoryRepository extends JpaRepository<ProductPropertyCategory,Long> {

}
