package ir.anijuu.products.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import ir.anijuu.products.domain.enumeration.TrustType;

import ir.anijuu.products.domain.enumeration.ProductTypeActivityType;

/**
 * A ProductType.
 */
@Entity
@Table(name = "product_type")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "producttype")
public class ProductType extends AbstractAuditingEntity  implements  Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "trust_type")
    private TrustType trustType;

    @Column(name = "color")
    private String color;

    @Column(name = "icon")
    private String icon;

    @Lob
    @Column(name = "banner")
    private byte[] banner;

    @Column(name = "banner_content_type")
    private String bannerContentType;

    @Column(name = "banner_url")
    private String bannerUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "product_type_activity_type")
    private ProductTypeActivityType productTypeActivityType;

    @ManyToOne
    private ProductTypeStatus status;

    @ManyToMany(fetch = FetchType.EAGER)
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "product_type_property",
               joinColumns = @JoinColumn(name="product_types_id", referencedColumnName="ID"),
               inverseJoinColumns = @JoinColumn(name="properties_id", referencedColumnName="ID"))
    private Set<ProductProperty> properties = new HashSet<>();

    @ManyToOne
    private ProductTypeCategory productTypeCategory;

    public ProductTypeCategory getProductTypeCategory() {
        return productTypeCategory;
    }

    public void setProductTypeCategory(ProductTypeCategory productTypeCategory) {
        this.productTypeCategory = productTypeCategory;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TrustType getTrustType() {
        return trustType;
    }

    public void setTrustType(TrustType trustType) {
        this.trustType = trustType;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public byte[] getBanner() {
        return banner;
    }

    public void setBanner(byte[] banner) {
        this.banner = banner;
    }

    public String getBannerContentType() {
        return bannerContentType;
    }

    public void setBannerContentType(String bannerContentType) {
        this.bannerContentType = bannerContentType;
    }

    public String getBannerUrl() {
        return bannerUrl;
    }

    public void setBannerUrl(String bannerUrl) {
        this.bannerUrl = bannerUrl;
    }

    public ProductTypeActivityType getProductTypeActivityType() {
        return productTypeActivityType;
    }

    public void setProductTypeActivityType(ProductTypeActivityType productTypeActivityType) {
        this.productTypeActivityType = productTypeActivityType;
    }

    public ProductTypeStatus getStatus() {
        return status;
    }

    public void setStatus(ProductTypeStatus productTypeStatus) {
        this.status = productTypeStatus;
    }

    public Set<ProductProperty> getProperties() {
        return properties;
    }

    public void setProperties(Set<ProductProperty> productProperties) {
        this.properties = productProperties;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ProductType productType = (ProductType) o;
        if(productType.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, productType.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ProductType{" +
            "id=" + id +
            ", title='" + title + "'" +
            ", description='" + description + "'" +
            ", trustType='" + trustType + "'" +
            ", color='" + color + "'" +
            ", icon='" + icon + "'" +
            ", banner='" + banner + "'" +
            ", bannerContentType='" + bannerContentType + "'" +
            ", bannerUrl='" + bannerUrl + "'" +
            ", productTypeActivityType='" + productTypeActivityType + "'" +
            '}';
    }
}
