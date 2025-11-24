package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Inventario;

public interface InventarioRepository extends JpaRepository<Inventario, Integer> {
}