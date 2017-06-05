package ir.anijuu.products.service;

import ir.anijuu.products.domain.RateInfo;
import ir.anijuu.products.web.rest.dto.RateInfoDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.LinkedList;
import java.util.List;

/**
 * Service Interface for managing RateInfo.
 */
public interface RateInfoService {

    /**
     * Save a rateInfo.
     * 
     * @param rateInfoDTO the entity to save
     * @return the persisted entity
     */
    RateInfoDTO save(RateInfoDTO rateInfoDTO);

    /**
     *  Get all the rateInfos.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<RateInfo> findAll(Pageable pageable);

    /**
     *  Get the "id" rateInfo.
     *  
     *  @param id the id of the entity
     *  @return the entity
     */
    RateInfoDTO findOne(Long id);

    /**
     *  Delete the "id" rateInfo.
     *  
     *  @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the rateInfo corresponding to the query.
     * 
     *  @param query the query of the search
     *  @return the list of entities
     */
    Page<RateInfo> search(String query, Pageable pageable);
}
