package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "atributo")
@Data
public class Atributo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int moedas = 0;
    private int rubys = 0;
    private int esmeraldas = 0;
    private int diamantes = 0;
    private int xp = 0;

    @OneToOne()
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private User user;
}
