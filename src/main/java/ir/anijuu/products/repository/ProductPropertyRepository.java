package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductProperty;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductProperty entity.
 */
@SuppressWarnings("unused")
public interface ProductPropertyRepository extends JpaRepository<ProductProperty,Long> {

    public ProductProperty findByIdentifier(String id);
}
