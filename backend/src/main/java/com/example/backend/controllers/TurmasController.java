package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.repository.TurmaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RequestMapping("/api/v1/turmas")
@RestController
public class TurmasController {

    @Autowired
    private TurmaRepository turmaRepository;


    @GetMapping("/qt")
    public long getTurmas() {
        return turmaRepository.count();
    }
    
}
