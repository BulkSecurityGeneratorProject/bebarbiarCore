package ir.anijuu.products.repository;

import ir.anijuu.products.domain.ProductType;

import ir.anijuu.products.domain.ProductTypeCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.time.ZonedDateTime;
import java.util.List;

/**
 * Spring Data JPA repository for the ProductType entity.
 */
@SuppressWarnings("unused")
public interface ProductTypeRepository extends JpaRepository<ProductType,Long> {

    @Query("select distinct productType from ProductType productType left join fetch productType.properties")
    List<ProductType> findAllWithEagerRelationships();

    @Query("select productType from ProductType productType left join fetch productType.properties where productType.id =:id")
    ProductType findOneWithEagerRelationships(@Param("id") Long id);
    @Query("SELECT  p FROM ProductType p  WHERE p.title like :title ")
    List<ProductType> getProductTypesTitle(@Param("title") String title,Pageable pageable);

    @Query("SELECT p FROM ProductType p  WHERE p.title= :title " )
    ProductType getTitle(@Param("title") String title);
    ProductType findById(long id);
    @Query("select p from ProductType p  where p.createdDate< :now and p.createdDate > :after")
    List<ProductType> newTypes(@Param("now") ZonedDateTime now,@Param("after") ZonedDateTime after);

    ProductType findByProductTypeCategory(ProductTypeCategory productTypeCategory);


}
