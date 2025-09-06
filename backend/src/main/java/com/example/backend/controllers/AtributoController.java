package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Atributo;
import com.example.backend.repository.AtributoRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/v1/atributo")
public class AtributoController {
    @Autowired
    private AtributoRepository atributoRepository;
    
    @GetMapping("/all")
    public List<Atributo> getAll() {
        return atributoRepository.findAll();
    }

    
    
}
