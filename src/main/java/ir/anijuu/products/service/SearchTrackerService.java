package ir.anijuu.products.service;

import ir.anijuu.products.service.dto.SearchTrackerDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

/**
 * Service Interface for managing SearchTracker.
 */
public interface SearchTrackerService {

    /**
     * Save a searchTracker.
     *
     * @param searchTrackerDTO the entity to save
     * @return the persisted entity
     */
    SearchTrackerDTO save(SearchTrackerDTO searchTrackerDTO);

    /**
     *  Get all the searchTrackers.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<SearchTrackerDTO> findAll(Pageable pageable);

    /**
     *  Get the "id" searchTracker.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    SearchTrackerDTO findOne(Long id);

    /**
     *  Delete the "id" searchTracker.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the searchTracker corresponding to the query.
     *
     *  @param query the query of the search
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<SearchTrackerDTO> search(String query, Pageable pageable);
}
