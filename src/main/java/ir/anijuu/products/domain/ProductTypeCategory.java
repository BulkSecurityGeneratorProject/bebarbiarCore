package ir.anijuu.products.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

import ir.anijuu.products.domain.enumeration.CategoryType;

/**
 * A ProductTypeCategory.
 */
@Entity
@NamedQueries({
    @NamedQuery(
        name = "ProductTypeCategory.menu",
        query = "select p from ProductTypeCategory p where p.parent.id = ?1 and p.idOthers is not null  order by p.orderIndex asc "
    )
})
@Table(name = "product_type_category")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "producttypecategory")
public class ProductTypeCategory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "icon")
    private String icon;

    @Column(name = "color")
    private String color;

    @Column(name = "path")
    private String path;

    @Column(name = "order_index")
    private Integer orderIndex;

    @Column(name = "id_others")
    private String idOthers;

    @Enumerated(EnumType.STRING)
    @Column(name = "category_type")
    private CategoryType categoryType;

    @Column(name = "pin")
    private String pin;

    @ManyToOne
    private ProductTypeStatus status;

    @ManyToOne
    private ProductTypeCategory parent;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Integer getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Integer orderIndex) {
        this.orderIndex = orderIndex;
    }

        public CategoryType getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(CategoryType categoryType) {
        this.categoryType = categoryType;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public ProductTypeStatus getStatus() {
        return status;
    }

    public void setStatus(ProductTypeStatus productTypeStatus) {
        this.status = productTypeStatus;
    }

    public ProductTypeCategory getParent() {
        return parent;
    }

    public void setParent(ProductTypeCategory productTypeCategory) {
        this.parent = productTypeCategory;
    }

    public String getIdOthers() {
        return idOthers;
    }

    public void setIdOthers(String idOthers) {
        this.idOthers = idOthers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ProductTypeCategory productTypeCategory = (ProductTypeCategory) o;
        if (productTypeCategory.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, productTypeCategory.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ProductTypeCategory{" +
            "id=" + id +
            ", title='" + title + "'" +
            ", description='" + description + "'" +
            ", icon='" + icon + "'" +
            ", color='" + color + "'" +
            ", path='" + path + "'" +
            ", orderIndex='" + orderIndex + "'" +

            '}';
    }
}
