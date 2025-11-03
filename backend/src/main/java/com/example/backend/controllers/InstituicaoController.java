package com.example.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Instituicao;
import com.example.backend.repository.InstituicaoRepository;

@RestController
@RequestMapping("/api/v1/instituicao")
public class InstituicaoController {
    
    @Autowired
    InstituicaoRepository instituicaoRepository;

    @GetMapping("/all")
    public List<Instituicao> GetInstitucaoAll(){
        return instituicaoRepository.findAll();
    }

    
}
