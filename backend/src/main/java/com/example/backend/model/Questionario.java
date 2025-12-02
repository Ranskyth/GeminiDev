package com.example.backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "questionario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Questionario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String titulo;

    @OneToMany(mappedBy = "questionario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Questoes> questoes;

    @OneToOne
    @JoinColumn(name = "missao_id")
    private Missoes missao;
}
