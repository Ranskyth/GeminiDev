package com.example.backend.dto;

import lombok.Data;

@Data
public class MissaoDto {
    public String nome;
    public String descricao;
    public Integer moedasRecompensa;
    public Integer xpRecompensa;
    public Integer diamantesRecompensa;
    public Integer rubysRecompensa;
    public Integer esmeraldasRecompensa;
    public Long turmaId;
}
