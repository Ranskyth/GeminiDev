package com.example.backend.repository;

import com.example.backend.model.Questoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestoesRepository extends JpaRepository<Questoes, Integer> {
    List<Questoes> findByQuestionarioId(Integer questionarioId);
}
