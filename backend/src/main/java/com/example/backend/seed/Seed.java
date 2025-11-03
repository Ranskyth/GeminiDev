package com.example.backend.seed;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.backend.model.Instituicao;
import com.example.backend.model.Turma;
import com.example.backend.repository.InstituicaoRepository;
import com.example.backend.repository.TurmaRepository;

@Component
public class Seed implements CommandLineRunner {
    @Autowired
    private TurmaRepository turmaRepository;
    @Autowired
    private InstituicaoRepository instituicaoRepository;


    @Override
    public void run(String... args) throws Exception {

        if (turmaRepository.count() == 0 && instituicaoRepository.count() == 0) {
            Turma turma = new Turma();
            Instituicao instituicao = new Instituicao();
            instituicao.setNome("ETEC");
            
            turma.setNome("DS 2");
            turma.setPeriodo("Noite");

            List<Turma> listaturma = new ArrayList<>();
            listaturma.add(turma);
            
            turma.setInstituicao(instituicao);
            instituicao.setTurma(listaturma);

            
            instituicaoRepository.save(instituicao);
            turmaRepository.save(turma);
        }
    

    }

}
