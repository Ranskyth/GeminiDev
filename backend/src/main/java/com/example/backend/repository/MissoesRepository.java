package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Missoes;

public interface MissoesRepository extends JpaRepository<Missoes, Integer> {
}