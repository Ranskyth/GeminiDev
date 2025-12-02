package com.example.backend.controllers;

import com.example.backend.model.LojaItem;
import com.example.backend.repository.LojaItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/loja-item")
public class LojaItemController {

    @Autowired
    private LojaItemRepository lojaItemRepository;

    @GetMapping("/all")
    public List<LojaItem> getAllLojaItems() {
        return lojaItemRepository.findAll();
    }

    @GetMapping("/{id}")
    public LojaItem getByIdLojaItem(@PathVariable int id) {
        return lojaItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item da loja não encontrado"));
    }

    @PostMapping
    public LojaItem createLojaItem(@RequestBody LojaItem lojaItem) {
        return lojaItemRepository.save(lojaItem);
    }

    @PutMapping("/{id}")
    public LojaItem updateLojaItem(@PathVariable int id, @RequestBody LojaItem lojaItem) {
        lojaItem.setId(id);
        return lojaItemRepository.save(lojaItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteLojaItem(@PathVariable int id) {
        lojaItemRepository.deleteById(id);
        return ResponseEntity.ok("Item da loja deletado com sucesso");
    }
}
