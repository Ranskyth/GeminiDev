package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.TurmaDto;
import com.example.backend.model.Turma;
import com.example.backend.repository.TurmaRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequestMapping("/api/v1/turma")
@RestController
public class TurmaController {

    @Autowired
    private TurmaRepository turmaRepository;

    @GetMapping("/all")
    public List<Turma> getMethodName() {
        return turmaRepository.findAll();
    }
    
    @GetMapping("/qt")
    public long getTurmas() {
        return turmaRepository.count();
    }

    @PostMapping
    public Turma createTurma(@RequestBody TurmaDto turmaDto){
        Turma turma = new Turma();
        turma.setNome(turmaDto.getTurma());
        return turmaRepository.save(turma);
    }
    
}
