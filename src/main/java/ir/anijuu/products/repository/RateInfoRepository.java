package ir.anijuu.products.repository;

import ir.anijuu.products.domain.RateInfo;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the RateInfo entity.
 */
@SuppressWarnings("unused")
public interface RateInfoRepository extends JpaRepository<RateInfo,Long> {

    public RateInfo findById(long id);
}
