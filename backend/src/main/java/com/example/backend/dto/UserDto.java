package com.example.backend.dto;

public class UserDto {
    private String Nome;
    private String Email;
    private String Senha;
    private String GithubName;
    private String Diciplina;

    public String getDiciplina() {
        return Diciplina;
    }

    public String getEmail() {
        return Email;
    }

    public String getGithubName() {
        return GithubName;
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

    public void setNome(String nome) {
        Nome = nome;
    }

    public void setSenha(String senha) {
        Senha = senha;
    }
}