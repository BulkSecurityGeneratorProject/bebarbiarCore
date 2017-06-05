package ir.anijuu.products.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Product.
 */
@Entity
@NamedQueries({
    @NamedQuery(
        name = "Product.hashIDs",
        query = "select p.hashId from Product p  "
    )

})
@Table(name = "product")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "product")
public class Product extends AbstractAuditingEntity  implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "discount")
    private Float discount;

    @Column(name = "counts")
    private Long counts;

    @Column(name = "icon")
    private String icon;

    @Column(name = "average_trust")
    private Double averageTrust;

    @Column(name = "description")
    private String description;

    @Column(name = "hash_id")
    private String hashId;

    @Column(name = "tags")
    private String tags;

    @Column(name = "price")
    private Integer price;


    @OneToMany(mappedBy = "product")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<ProductPropertyValue> propertyValues = new HashSet<>();

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<ProductContent> contents = new HashSet<>();

    @ManyToOne
    private ProductStatus status;

    @ManyToOne
    private ProductType productType;

    @Column(name = "otherId")
    private String otherId;

    @Column(name = "duration")
    public String duration;
    private String address;


    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

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

    public Float getDiscount() {
        return discount;
    }

    public void setDiscount(Float discount) {
        this.discount = discount;
    }

    public Long getCounts() {
        return counts;
    }

    public void setCounts(Long counts) {
        this.counts = counts;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Double getAverageTrust() {
        return averageTrust;
    }

    public void setAverageTrust(Double averageTrust) {
        this.averageTrust = averageTrust;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHashId() {
        return hashId;
    }

    public void setHashId(String hashId) {
        this.hashId = hashId;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }


    public Set<ProductPropertyValue> getPropertyValues() {
        return propertyValues;
    }

    public void setPropertyValues(Set<ProductPropertyValue> productPropertyValues) {
        this.propertyValues = productPropertyValues;
    }

    public Set<ProductContent> getContents() {
        return contents;
    }

    public void setContents(Set<ProductContent> productContents) {
        this.contents = productContents;
    }

    public ProductStatus getStatus() {
        return status;
    }

    public void setStatus(ProductStatus productStatus) {
        this.status = productStatus;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public String getOtherId() {
        return otherId;
    }

    public void setOtherId(String otherId) {
        this.otherId = otherId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Product product = (Product) o;
        if(product.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Product{" +
            "id=" + id +
            ", title='" + title + "'" +
            ", discount='" + discount + "'" +
            ", counts='" + counts + "'" +
            ", icon='" + icon + "'" +
            ", averageTrust='" + averageTrust + "'" +
            ", description='" + description + "'" +
            ", hashId='" + hashId + "'" +
            ", tags='" + tags + "'" +
            ", price='" + price + "'" +
            '}';
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
