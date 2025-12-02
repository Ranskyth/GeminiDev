package com.example.backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "turma")
@Data
public class Turma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long Id;

    @Column(name = "nome")
    private String nome; 

    private String periodo;

    @JsonIgnore
    @OneToMany(mappedBy = "turma", cascade = CascadeType.ALL)
    private List<User> user;

    @ManyToOne()
    @JsonIgnore
    @JoinColumn(name = "instituicao_id")
    private Instituicao instituicao;

}
