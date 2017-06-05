package ir.anijuu.products.repository;

import ir.anijuu.products.domain.Product;
import ir.anijuu.products.domain.ProductPropertyValue;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductPropertyValue entity.
 */
@SuppressWarnings("unused")
public interface ProductPropertyValueRepository extends JpaRepository<ProductPropertyValue, Long> {
    List<String> cards(Long id);

    @Query("select p.id from ProductPropertyValue p where p.value like :title and p.id=29")
    List<Long> getByNasher(@Param("title") String title);
}
