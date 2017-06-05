package ir.anijuu.products.service;

import ir.anijuu.products.domain.ProductDiscount;
import ir.anijuu.products.web.rest.dto.ProductDiscountDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.LinkedList;
import java.util.List;

/**
 * Service Interface for managing ProductDiscount.
 */
public interface ProductDiscountService {

    /**
     * Save a productDiscount.
     * 
     * @param productDiscountDTO the entity to save
     * @return the persisted entity
     */
    ProductDiscountDTO save(ProductDiscountDTO productDiscountDTO);

    /**
     *  Get all the productDiscounts.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<ProductDiscount> findAll(Pageable pageable);

    /**
     *  Get the "id" productDiscount.
     *  
     *  @param id the id of the entity
     *  @return the entity
     */
    ProductDiscountDTO findOne(Long id);

    /**
     *  Delete the "id" productDiscount.
     *  
     *  @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the productDiscount corresponding to the query.
     * 
     *  @param query the query of the search
     *  @return the list of entities
     */
    Page<ProductDiscount> search(String query, Pageable pageable);
}
