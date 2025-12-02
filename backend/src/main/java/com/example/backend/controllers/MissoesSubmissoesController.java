package com.example.backend.controllers;

import com.example.backend.model.MissoesSubmissoes;
import com.example.backend.model.User;
import com.example.backend.model.Missoes;
import com.example.backend.dto.MissoesSubmissoesDto;
import com.example.backend.repository.MissoesSubmissoesRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.MissoesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/missoes-submissoes")
public class MissoesSubmissoesController {

    @Autowired
    private MissoesSubmissoesRepository missoesSubmissoesRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MissoesRepository missoesRepository;


    @PostMapping
    public MissoesSubmissoes createSubmissao(@RequestBody MissoesSubmissoesDto dto) {
        User user = userRepository.findById(dto.getUserId().longValue())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        Missoes missao = missoesRepository.findById(dto.getMissaoId())
                .orElseThrow(() -> new RuntimeException("Missão não encontrada"));

        MissoesSubmissoes submissao = new MissoesSubmissoes();
        submissao.setUser(user);
        submissao.setMissao(missao);
        submissao.setStatus(dto.getStatus());
        submissao.setObservacao(dto.getObservacao());
        submissao.setDataEnvio(LocalDateTime.now());

        return missoesSubmissoesRepository.save(submissao);
    }


    @GetMapping("/all")
    public List<MissoesSubmissoes> getAllSubmissoes() {
        return missoesSubmissoesRepository.findAll();
    }


    @GetMapping("/user/{userId}")
    public List<MissoesSubmissoes> getSubmissoesByUser(@PathVariable int userId) {
        return missoesSubmissoesRepository.findAll().stream()
                .filter(s -> s.getUser() != null && s.getUser().getId() == userId)
                .toList();
    }


    @PutMapping("/{id}")
    public MissoesSubmissoes updateSubmissao(@PathVariable int id, @RequestBody MissoesSubmissoes submissao) {
        submissao.setId(id);
        return missoesSubmissoesRepository.save(submissao);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity deleteSubmissao(@PathVariable int id) {
        missoesSubmissoesRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
