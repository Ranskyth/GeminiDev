package com.example.backend.controllers;

import com.example.backend.dto.MissaoDto;
import com.example.backend.model.Missoes;
import com.example.backend.model.Turma;
import com.example.backend.repository.MissoesRepository;
import com.example.backend.repository.TurmaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/missions")
public class MissoesController {

    @Autowired
    private MissoesRepository missoesRepository;
    
    @Autowired
    private TurmaRepository turmaRepository;

    @PostMapping
    public Missoes createMissoes(@RequestBody MissaoDto missaoDto) {
        
    Turma turma = turmaRepository.findById(missaoDto.turmaId)
            .orElseThrow(() -> new RuntimeException("Turma não encontrada"));

    Missoes missao = new Missoes();
    missao.setNome(missaoDto.nome);
    missao.setDescricao(missaoDto.descricao);
    missao.setMoedasRecompensa(missaoDto.moedasRecompensa);
    missao.setXpRecompensa(missaoDto.xpRecompensa);
    missao.setDiamantesRecompensa(missaoDto.diamantesRecompensa);
    missao.setRubysRecompensa(missaoDto.rubysRecompensa);
    missao.setEsmeraldasRecompensa(missaoDto.esmeraldasRecompensa);
    
    missao.setTurma(turma);

    return missoesRepository.save(missao);
    }

    @GetMapping
    public List<Missoes> getAllMissoes() {
        return missoesRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public String deleteMissoes(@PathVariable Integer id) {
        Missoes missao = missoesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Missão não encontrada"));

        missoesRepository.delete(missao);
        return "Missão deletada com sucesso!";
    }

}
