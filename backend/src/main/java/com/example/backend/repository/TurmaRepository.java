package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Turma;

public interface TurmaRepository extends JpaRepository<Turma, Long>{

    Optional<Turma> findById(Long turmaId);}