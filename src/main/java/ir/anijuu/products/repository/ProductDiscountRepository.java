package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductDiscount;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductDiscount entity.
 */
@SuppressWarnings("unused")
public interface ProductDiscountRepository extends JpaRepository<ProductDiscount,Long> {

}
