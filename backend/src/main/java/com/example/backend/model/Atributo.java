package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "atributo")
@Data
public class Atributo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int pontos;
    private int moedas;
    private int ruby;
    private int esmeraldas;
    private int diamantes;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Atributo(){}
}
