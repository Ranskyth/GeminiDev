package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

    @Column(columnDefinition = "TEXT")
    private String conteudo;


    @JsonIgnore
    @OneToOne(mappedBy = "missao", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Questionario questionario;
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "turma_id")
    private Turma turma;

}
