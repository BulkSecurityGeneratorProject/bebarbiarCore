package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductContent;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductContent entity.
 */
@SuppressWarnings("unused")
public interface ProductContentRepository extends JpaRepository<ProductContent,Long> {

}
