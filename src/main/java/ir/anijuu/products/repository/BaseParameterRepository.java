package ir.anijuu.products.repository;

import ir.anijuu.products.domain.BaseParameter;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the BaseParameter entity.
 */
@SuppressWarnings("unused")
public interface BaseParameterRepository extends JpaRepository<BaseParameter,Long> {

}
