package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Turma;
import com.example.backend.repository.TurmaRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

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
    
}
