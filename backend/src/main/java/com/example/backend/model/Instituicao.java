package com.example.backend.model;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Instituicao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    private String nome;

    @OneToMany(mappedBy = "instituicao", cascade = CascadeType.ALL)
    private List<Turma> turma;
}
