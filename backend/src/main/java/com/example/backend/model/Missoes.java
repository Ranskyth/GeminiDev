package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "missoes")
@Data
public class Missoes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    private Integer moedasRecompensa;
    private Integer xpRecompensa;
    private Integer diamantesRecompensa;
    private Integer rubysRecompensa;
    private Integer esmeraldasRecompensa;

    @ManyToOne
    @JoinColumn(name = "turma_id")
    private Turma turma;

}
