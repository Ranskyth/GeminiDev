package com.example.backend.model;

import jakarta.persistence.*;

import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Table(name = "missoes")
@Data
public class Missoes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; 

    private String nome;

    private String descricao;
    private int moeda_recompensa;
    private int esmeralda_recompensa;
    private int ruby_recompensa;
    private int diamante_recompensa;
    private int xp_recompensa;

}
