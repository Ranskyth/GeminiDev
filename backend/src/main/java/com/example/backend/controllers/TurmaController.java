package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.TurmaDto;
import com.example.backend.model.Instituicao;
import com.example.backend.model.Turma;
import com.example.backend.repository.InstituicaoRepository;
import com.example.backend.repository.TurmaRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequestMapping("/api/v1/turma")
@RestController
public class TurmaController {

    @Autowired
    private TurmaRepository turmaRepository;

    @Autowired
    InstituicaoRepository instituicaoRepository;

    @GetMapping("/all")
    public List<Turma> getMethodName() {
        return turmaRepository.findAll();
    }

    @GetMapping("/qt")
    public long getTurmas() {
        return turmaRepository.count();
    }

    @PostMapping
    public Turma createTurma(@RequestBody TurmaDto turmaDto) {
        var instituicaoss = instituicaoRepository.findById(turmaDto.getInstituicao())
                .orElseThrow(() -> new RuntimeException("Error na busca"));
        Turma turma = new Turma();
        Instituicao instituicao = new Instituicao();
        turma.setNome(turmaDto.getTurma());
        turma.setPeriodo(turmaDto.getPeriodo());
        List<Turma> listTurma = new ArrayList<>();

        listTurma.add(turma);

        turma.setInstituicao(instituicaoss);
        instituicao.setTurma(listTurma);
        return turmaRepository.save(turma);
    }

}
