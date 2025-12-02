package com.example.backend.controllers;

import com.example.backend.model.InventarioItem;
import com.example.backend.repository.InventarioItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/inventario-item")
public class InventarioItemController {

    @Autowired
    private InventarioItemRepository inventarioItemRepository;

    @GetMapping("/user/{userId}")
    public List<InventarioItem> getInventarioItemsByUser(@PathVariable int userId) {
        return inventarioItemRepository.findAll().stream()
                .filter(item -> item.getInventario() != null && item.getInventario().getUser() != null
                        && item.getInventario().getUser().getId() == userId)
                .collect(Collectors.toList());
    }

    @GetMapping("/all")
    public List<InventarioItem> getAllInventarioItems() {
        return inventarioItemRepository.findAll();
    }

    @GetMapping("/{id}")
    public InventarioItem getByIdInventarioItem(@PathVariable int id) {
        return inventarioItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item do inventário não encontrado"));
    }

    @PostMapping
    public InventarioItem createInventarioItem(@RequestBody InventarioItem inventarioItem) {
        return inventarioItemRepository.save(inventarioItem);
    }

    @PutMapping("/{id}")
    public InventarioItem updateInventarioItem(@PathVariable int id, @RequestBody InventarioItem inventarioItem) {
        inventarioItem.setId(id);
        return inventarioItemRepository.save(inventarioItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteInventarioItem(@PathVariable int id) {
        inventarioItemRepository.deleteById(id);
        return ResponseEntity.ok("Item do inventário deletado com sucesso");
    }
}
