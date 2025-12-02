package com.example.backend.controllers;

import com.example.backend.dto.ItemDto;
import com.example.backend.model.Item;
import com.example.backend.repository.ItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/item")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;


    @PostMapping
    public Item createItem(@RequestBody ItemDto dto) {
        Item item = new Item();
        item.setNome(dto.getNome());
        item.setDescricao(dto.getDescricao());
        return itemRepository.save(item);
    }


    @GetMapping("/all")
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }


    @GetMapping("/{id}")
    public Item getByIdItem(@PathVariable int id) {
        return itemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item não encontrado"));
    }


    @PutMapping("/{id}")
    public Item updateItem(@PathVariable int id, @RequestBody ItemDto dto) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item não encontrado"));
        item.setNome(dto.getNome());
        item.setDescricao(dto.getDescricao());
        return itemRepository.save(item);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable int id) {
        itemRepository.deleteById(id);
        return ResponseEntity.ok("Item deletado com sucesso");
    }
}
