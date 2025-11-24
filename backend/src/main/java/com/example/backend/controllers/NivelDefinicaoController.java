package com.example.backend.controllers;

import com.example.backend.dto.NivelDefinicaoDto;
import com.example.backend.model.NivelDefinicao;
import com.example.backend.repository.NivelDefinicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/nivel-definicao")
public class NivelDefinicaoController {

    @Autowired
    private NivelDefinicaoRepository repo;

    @PostMapping
    public NivelDefinicao createNivelDefinicao(@RequestBody NivelDefinicaoDto dto) {
        NivelDefinicao n = new NivelDefinicao();
        n.setNome(dto.getNome());
        n.setPontosNecessarios(dto.getPontosNecessarios());
        return repo.save(n);
    }

    @GetMapping("/all")
    public List<NivelDefinicao> getAllNivelDefinicao() { return repo.findAll(); }

    @GetMapping("/{id}")
    public NivelDefinicao getByIdNivelDefinicao(@PathVariable int id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Não encontrado"));
    }

    @PutMapping("/{id}")
    public NivelDefinicao updateNivelDefinicao(@PathVariable int id, @RequestBody NivelDefinicaoDto dto) {
        NivelDefinicao n = repo.findById(id).orElseThrow(() -> new RuntimeException("Não encontrado"));
        n.setNome(dto.getNome());
        n.setPontosNecessarios(dto.getPontosNecessarios());
        return repo.save(n);
    }

    @DeleteMapping("/{id}")
    public String deleteNivelDefinicao(@PathVariable int id) {
        repo.deleteById(id);
        return "Deletado com sucesso";
    }
}
