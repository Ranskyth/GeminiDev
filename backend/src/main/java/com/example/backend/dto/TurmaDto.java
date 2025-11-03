package com.example.backend.dto;

import lombok.Data;


public class TurmaDto {
    String Turma;
    String Periodo;
    int Instituicao;
    public String getTurma() {
        return Turma;
    }
    public void setTurma(String turma) {
        Turma = turma;
    }
    public String getPeriodo() {
        return Periodo;
    }
    public void setPeriodo(String periodo) {
        Periodo = periodo;
    }
    public int getInstituicao() {
        return Instituicao;
    }
    public void setInstituicao(int instituicao) {
        Instituicao = instituicao;
    }

    

    
    
}
