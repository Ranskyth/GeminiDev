package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/alunos")
public class AlunoController {
    
    @GetMapping
    public ResponseEntity<String> getAlunos() {
        return ResponseEntity.ok("ok");
    }
    
}
