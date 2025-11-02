package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Instituicao;

public interface InstituicaoRepository extends JpaRepository <Instituicao, Integer> {
    
}
