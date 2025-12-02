package com.example.backend.dto;

import lombok.Data;

@Data
public class MissoesSubmissoesDto {
    private Integer userId;
    private Integer missaoId;
    private String status;
    private String observacao;
}
