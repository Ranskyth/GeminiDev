package com.example.backend.repository;

import com.example.backend.model.Questionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionarioRepository extends JpaRepository<Questionario, Integer> {
    Questionario findByMissaoId(Integer missaoId);
}
