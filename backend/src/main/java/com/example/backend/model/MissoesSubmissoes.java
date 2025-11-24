package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MissoesSubmissoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "aluno_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "missao_id")
    private Missoes missao;

    private String status;

    private LocalDateTime dataEnvio;

    private LocalDateTime dataAvaliacao;

    @Column(columnDefinition = "TEXT")
    private String observacao;

    private String arquivoUrl;
}
