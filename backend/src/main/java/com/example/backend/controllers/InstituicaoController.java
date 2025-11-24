package com.example.backend.controllers;

import com.example.backend.dto.InstituicaoDto;
import com.example.backend.model.Instituicao;
import com.example.backend.repository.InstituicaoRepository;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/instituicao")
public class InstituicaoController {

    @Autowired
    private InstituicaoRepository instituicaoRepository;

  
    @PostMapping
    public Instituicao createInstituicaos(@RequestBody InstituicaoDto dto) {
        Instituicao i = new Instituicao();
        i.setNome(dto.getNome());
        return instituicaoRepository.save(i);
    }

  
    @GetMapping("/")
    public List<Instituicao> getAllInstituicaos() {
        return instituicaoRepository.findAll();
    }

  
    @GetMapping("/{id}")
    public Instituicao getByIdInstituicaos(@PathVariable int id) {
        return instituicaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Instituição não encontrada"));
    }

   
    @PutMapping("/{id}")
    public Instituicao updateInstituicaos(@PathVariable int id, @RequestBody InstituicaoDto dto) {
        Instituicao i = instituicaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Instituição não encontrada"));
        i.setNome(dto.getNome());
        return instituicaoRepository.save(i);
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInstituicaos(@PathVariable int id) {
        instituicaoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
