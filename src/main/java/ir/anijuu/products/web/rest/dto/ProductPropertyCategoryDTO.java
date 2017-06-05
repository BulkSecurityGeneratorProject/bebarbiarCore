package ir.anijuu.products.web.rest.dto;


import com.google.common.base.Objects;

import java.util.Arrays;

/**
 * Created by M_Bahrevar on 8/14/2016.
 */
public class ProductPropertyCategoryDTO {

    private Long id;
    private String title;
    private byte[] icon;

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

    public byte[] getIcon() {
        return icon;
    }

    public void setIcon(byte[] icon) {
        this.icon = icon;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProductPropertyCategoryDTO that = (ProductPropertyCategoryDTO) o;

        if (!id.equals(that.id)) return false;
        if (title != null ? !title.equals(that.title) : that.title != null) return false;
        return Arrays.equals(icon, that.icon);

    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + Arrays.hashCode(icon);
        return result;
    }

    @Override
    public String toString() {
        return Objects.toStringHelper(this)
            .add("id", id)
            .add("title", title)
            .add("icon", icon)
            .toString();
    }
}
