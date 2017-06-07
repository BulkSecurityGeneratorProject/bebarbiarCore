package ir.anijuu.products.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

import ir.anijuu.products.domain.enumeration.ParameterType;

/**
 * A BaseParameter.
 */
@Entity
@Table(name = "base_parameter")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)

public class BaseParameter implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "value")
    private String value;

    @Enumerated(EnumType.STRING)
    @Column(name = "parameter_type")
    private ParameterType parameterType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public ParameterType getParameterType() {
        return parameterType;
    }

    public void setParameterType(ParameterType parameterType) {
        this.parameterType = parameterType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        BaseParameter baseParameter = (BaseParameter) o;
        if(baseParameter.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, baseParameter.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "BaseParameter{" +
            "id=" + id +
            ", value='" + value + "'" +
            ", parameterType='" + parameterType + "'" +
            '}';
    }
}
