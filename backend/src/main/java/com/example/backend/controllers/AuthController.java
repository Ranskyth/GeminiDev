package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.LoginDto;
import com.example.backend.dto.UserDto;
import com.example.backend.model.Token;
import com.example.backend.model.User;
import com.example.backend.model.UserRole;
import com.example.backend.repository.UserRepository;
import com.example.backend.services.AuthServices;
import com.example.backend.services.TokenServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequestMapping("/api/v1/auth")
@RestController
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthServices authService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenServices tokenService;

    @PostMapping("/login")
    public Token Login(@RequestBody LoginDto loginDto) {
        User user = (User) authService.loadUserByUsername(loginDto.getEmail());
        if (!passwordEncoder.matches(loginDto.getSenha(), user.getPassword())) {
            throw new BadCredentialsException("Senha incorreta");
        }
        return tokenService.createToken(user);
    }

    @PostMapping("/register")
    public User Register(@RequestBody UserDto userDto) {
        User user = new User();
        user.setNome(userDto.getNome());
        user.setSenha(passwordEncoder.encode(userDto.getSenha()));
        user.setEmail(userDto.getEmail());
        user.setRole(UserRole.USER);
        user.setGithub(userDto.getGithub());
        user.setDiciplina(userDto.getDiciplina());

        return userRepository.save(user);

    }

    @PostMapping("/reset-password")
    public String ResetPassword(@RequestBody String entity) {

        return entity;
    }

}
