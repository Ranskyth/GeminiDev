package com.example.backend.dto;

public class UserDto {
    private String nome;
    private String email;
    private String senha;
    private String github;
    private String diciplina;

    public String getDiciplina() {
        return diciplina;
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

    public void setDiciplina(String diciplina) {
        this.diciplina = diciplina;
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