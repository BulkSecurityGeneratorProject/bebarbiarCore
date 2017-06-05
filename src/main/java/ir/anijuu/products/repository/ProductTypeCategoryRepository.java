package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductTypeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductTypeCategory entity.
 */
@SuppressWarnings("unused")
public interface ProductTypeCategoryRepository extends JpaRepository<ProductTypeCategory, Long> {
    List<ProductTypeCategory> findByPathStartingWithOrderByPathAscIdAsc(String path);

    List<ProductTypeCategory> menu(Long id);
    ProductTypeCategory findByIdOthers(String id);
}
