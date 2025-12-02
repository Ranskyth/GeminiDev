package com.example.backend.controllers;

import com.example.backend.model.Questionario;
import com.example.backend.repository.QuestionarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/questionario")
public class QuestionarioController {

    @Autowired
    private QuestionarioRepository questionarioRepository;

    @GetMapping("/missao/{missaoId}")
    public ResponseEntity<Questionario> getQuestionarioByMissao(@PathVariable int missaoId) {
        Questionario questionario = questionarioRepository.findByMissaoId(missaoId);
        if (questionario != null) {
            return ResponseEntity.ok(questionario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public Iterable<Questionario> getAllQuestionarios() {
        return questionarioRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Questionario> getByIdQuestionario(@PathVariable int id) {
        return questionarioRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Questionario createQuestionario(@RequestBody Questionario questionario) {
        return questionarioRepository.save(questionario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Questionario> updateQuestionario(@PathVariable int id, @RequestBody Questionario questionario) {
        if (!questionarioRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        questionario.setId(id);
        return ResponseEntity.ok(questionarioRepository.save(questionario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuestionario(@PathVariable int id) {
        if (!questionarioRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        questionarioRepository.deleteById(id);
        return ResponseEntity.ok("Questionário deletado com sucesso");
    }
}
