package com.example.backend.dto;

import com.example.backend.model.Turma;

public class UserDto {
    private String nome;
    private String email;
    private String senha;
    private String github;
    private long turma;

    public long getTurma() {
        return turma;
    }

    public String getEmail() {
        return email;
    }

    public String getGithub() {
        return github;
    }

    public String getNome() {
        return nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setTurma(int turma) {
        this.turma = turma;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}