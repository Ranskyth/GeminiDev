package com.example.backend.seed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.backend.model.Turma;
import com.example.backend.repository.TurmaRepository;

@Component
public class Seed implements CommandLineRunner {
    @Autowired
    private TurmaRepository turmaRepository;


    @Override
    public void run(String... args) throws Exception {

        if (turmaRepository.count() == 0) {
            Turma turma = new Turma();
            turma.setNome("DS 2");

            turmaRepository.save(turma);
        }

    }

}
