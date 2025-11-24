package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.InventarioItem;

public interface InventarioItemRepository extends JpaRepository<InventarioItem, Integer> {
}
