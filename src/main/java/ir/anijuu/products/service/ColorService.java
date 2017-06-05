package ir.anijuu.products.service;

import ir.anijuu.products.domain.Color;
import ir.anijuu.products.web.rest.dto.ColorDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.LinkedList;
import java.util.List;

/**
 * Service Interface for managing Color.
 */
public interface ColorService {

    /**
     * Save a color.
     * 
     * @param colorDTO the entity to save
     * @return the persisted entity
     */
    ColorDTO save(ColorDTO colorDTO);

    /**
     *  Get all the colors.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<Color> findAll(Pageable pageable);

    /**
     *  Get the "id" color.
     *  
     *  @param id the id of the entity
     *  @return the entity
     */
    ColorDTO findOne(Long id);

    /**
     *  Delete the "id" color.
     *  
     *  @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the color corresponding to the query.
     * 
     *  @param query the query of the search
     *  @return the list of entities
     */
    Page<Color> search(String query, Pageable pageable);
}
