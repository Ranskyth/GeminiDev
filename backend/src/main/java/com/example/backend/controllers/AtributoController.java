package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.AtributoDto;
import com.example.backend.model.Atributo;
import com.example.backend.repository.AtributoRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/atributo")
public class AtributoController {
    @Autowired
    private AtributoRepository atributoRepository;

    @PostMapping
    public Atributo create(@RequestBody AtributoDto dto) {
        Atributo a = new Atributo();
        a.setMoedas(dto.getMoedas());
        a.setRubys(dto.getRubys());
        a.setEsmeraldas(dto.getEsmeraldas());
        a.setDiamantes(dto.getDiamantes());
        a.setXp(dto.getXp());
        return atributoRepository.save(a);
    }

    @GetMapping("/all")
    public List<Atributo> getAllAtributos() {
        return atributoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Atributo getByIdAtributos(@PathVariable Long id) {
        return atributoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Atributo não encontrado"));
    }

    @PutMapping("/{id}")
    public Atributo updateAtributos(@PathVariable Long id, @RequestBody AtributoDto dto) {
        Atributo atributo = atributoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Atributo não encontrado"));

        atributo.setMoedas(dto.getMoedas());
        atributo.setRubys(dto.getRubys());
        atributo.setEsmeraldas(dto.getEsmeraldas());
        atributo.setDiamantes(dto.getDiamantes());
        atributo.setXp(dto.getXp());

        return atributoRepository.save(atributo);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteAtributos(@PathVariable Long id) {
        atributoRepository.deleteById(id);
        return "Atributo deletado com sucesso";
    }

}
