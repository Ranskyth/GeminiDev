package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.LoginDto;
import com.example.backend.dto.UserDto;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RequestMapping("/api/v1/auth")
@RestController
public class AuthController {
    

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public void Login(@RequestBody LoginDto loginDto) {
    
    }
    
    @PostMapping("/register")
    public User Register(@RequestBody UserDto userDto) {
        User user = new User();
        user.setNome(userDto.getNome());
        user.setSenha(userDto.getSenha());
        user.setEmail(userDto.getEmail());
        user.setGithub(userDto.getGithub());
        user.setDiciplina(userDto.getDiciplina());

        return userRepository.save(user);
        
        
    }

    @PostMapping("/reset-password")
    public String ResetPassword(@RequestBody String entity) {
       
        
        return entity;
    }
    
    
}
