package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import com.example.backend.dto.UserDto;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public List<User> getUser() {
        return userRepository.findAll();
    }

    @GetMapping("/qt")
    public long getQtUsers() {
        return userRepository.count();
    }

    @GetMapping
    public ResponseEntity<User> getUserByEmail(@RequestParam String email){
        return userRepository.findByEmail(email).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public User createUser(@RequestBody UserDto userDto) {
        User user = new User();
        user.setNome(userDto.getNome());
        user.setSenha(userDto.getSenha());
        user.setEmail(userDto.getEmail());
        user.setGithub(userDto.getGithub());
        user.setDiciplina(userDto.getDiciplina());
        return userRepository.save(user);
    }

}
