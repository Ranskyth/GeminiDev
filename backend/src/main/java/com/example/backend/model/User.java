package com.example.backend.model;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID Id;

    @Column(name = "nome")
    private String Nome;

    @Column(name = "email")
    private String Email;

    @Column(name = "senha")
    private String Senha;

    @Column(name = "role")
    private String Role;

    @Column(name = "githubName")
    private String GithubName;

    @Column(name = "diciplina")
    private String Diciplina;

    public User() {

    }

    public User(UUID Id, String Nome, String Email, String Senha, String GithubName, String Diciplina) {
        this.Id = Id;
        this.Nome = Nome;
        this.Email = Email;
        this.Senha = Senha;
        this.GithubName = GithubName;
        this.Diciplina = Diciplina;
    }

    public String getDiciplina() {
        return Diciplina;
    }

    public String getEmail() {
        return Email;
    }

    public String getGithubName() {
        return GithubName;
    }

    public UUID getId() {
        return Id;
    }

    public String getNome() {
        return Nome;
    }

    public String getSenha() {
        return Senha;
    }

    public void setDiciplina(String diciplina) {
        Diciplina = diciplina;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public void setGithubName(String githubName) {
        GithubName = githubName;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public void setSenha(String senha) {
        Senha = senha;
    }
}
