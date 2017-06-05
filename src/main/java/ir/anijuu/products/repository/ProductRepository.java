package ir.anijuu.products.repository;

import ir.anijuu.products.domain.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Product entity.
 */
@SuppressWarnings("unused")
public interface ProductRepository extends JpaRepository<Product,Long> {

    @Query("SELECT p.id FROM Product  p ")
    List<Long> getProductIds();

    Product findById(long id);
    Product findByDescription(String description);


    @Query("SELECT p.contents FROM Product p  WHERE p.id = (:id)")
    List<ProductContent> getProductContents(@Param("id") long id);

    @Query("SELECT p.propertyValues FROM Product p  WHERE p.id = (:id)")
    List<ProductPropertyValue> getProductPropertyValue(@Param("id") long id);

    @Query("SELECT distinct  p.productType.id FROM Product p  WHERE p.title like :title or p.productType.title like :title  ")
    Page<Long> getProductTypesByProduct(@Param("title") String title,Pageable pageable);
    @Query("SELECT  p.id,p.title FROM Product p  WHERE p.title like :title ")
    Page<Object[]> getProductTypesByTitle(@Param("title") String title,Pageable pageable);

    Page<Product> findByProductType(ProductType productType, Pageable pageable);



    @Query("select p.id,p.title from Product p where p.title like :title ")
    List<Object[]> getProductsByTile(@Param("title") String title);


    @Query("select p.title, p.discount, p.description, p.icon, p.id,p.averageTrust from Product p where p.discount is not null and p.discount>0")
    Page<Object[]> discounts(Pageable pageable);

    Product findByHashId(String hashId);

    List<String> hashIDs();



    public long count();

}
