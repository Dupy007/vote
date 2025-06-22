package fr.azteck.vote.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDate;


@Data
@Accessors(chain = true)
@MappedSuperclass
public abstract class Model {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "created_at")
    private LocalDate createDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "updated_at")
    private LocalDate updateDate;


    @PrePersist
    public void prePersist() {
        this.createDate = LocalDate.now();
        this.updateDate = LocalDate.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.updateDate = LocalDate.now();
    }
}