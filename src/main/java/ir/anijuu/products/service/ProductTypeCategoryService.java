package ir.anijuu.products.service;

import ir.anijuu.products.config.Constants;
import ir.anijuu.products.domain.ProductTypeCategory;
import ir.anijuu.products.repository.ProductTypeCategoryRepository;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Inject;
import java.util.List;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class ProductTypeCategoryService {

    private final Logger log = LoggerFactory.getLogger(ProductTypeCategoryService.class);

    @Inject
    private ProductTypeCategoryRepository productTypeCategoryRepository;
    @Inject
    private UserService userService;

    public ProductTypeCategory saveByUpdatePath(ProductTypeCategory productTypeCategory) {
        log.debug("Save path of product type category {}", productTypeCategory);
        if (productTypeCategory.getParent() != null) {
            ProductTypeCategory parent = productTypeCategoryRepository.getOne(productTypeCategory.getParent().getId());
            String path;
            if (parent.getPath() == null)
                path = parent.getId().toString();
            else
                path = parent.getPath().concat(Constants.PATH_DELIMETER).concat(parent.getId().toString());
            productTypeCategory.setPath(path);
        }
        return productTypeCategoryRepository.save(productTypeCategory);
    }




}
