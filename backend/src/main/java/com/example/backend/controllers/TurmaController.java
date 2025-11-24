package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.TurmaDto;
import com.example.backend.model.Instituicao;
import com.example.backend.model.Turma;
import com.example.backend.repository.InstituicaoRepository;
import com.example.backend.repository.TurmaRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@RequestMapping("/api/v1/turma")
@RestController
public class TurmaController {

    @Autowired
    private TurmaRepository turmaRepository;

    @Autowired
    private InstituicaoRepository instituicaoRepository;

    @GetMapping("/all")
    public List<Turma> getAllTurma() {
        return turmaRepository.findAll();
    }

    @GetMapping("/qt")
    public long getTurmas() {
        return turmaRepository.count();
    }

    @PostMapping
    public Turma createTurma(@RequestBody TurmaDto turmaDto) {
        Instituicao instituicao = instituicaoRepository.findById(turmaDto.getInstituicao())
                .orElseThrow(() -> new RuntimeException("Instituição não encontrada"));

        Turma turma = new Turma();
        turma.setNome(turmaDto.getTurma());
        turma.setPeriodo(turmaDto.getPeriodo());
        turma.setInstituicao(instituicao);

        return turmaRepository.save(turma);
    }

    @PutMapping("/{id}")
    public Turma updateTurma(@PathVariable Long id, @RequestBody TurmaDto turmaDto) {
        Turma turma = turmaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Turma não encontrada"));

        Instituicao instituicao = instituicaoRepository.findById(turmaDto.getInstituicao())
                .orElseThrow(() -> new RuntimeException("Instituição não encontrada"));

        turma.setNome(turmaDto.getTurma());
        turma.setPeriodo(turmaDto.getPeriodo());
        turma.setInstituicao(instituicao);

        return turmaRepository.save(turma);
    }

    @DeleteMapping("/{id}")
    public String deleteTurma(@PathVariable Long id) {
        Turma turma = turmaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Turma não encontrada"));

        turmaRepository.delete(turma);
        return "Turma deletada com sucesso";
    }
}
