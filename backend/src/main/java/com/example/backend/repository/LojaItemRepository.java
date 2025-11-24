package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.LojaItem;

public interface LojaItemRepository extends JpaRepository<LojaItem, Integer> {
}
