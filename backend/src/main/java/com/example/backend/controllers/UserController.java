package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.UserDto;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getUser() {
        return userRepository.findAll();
    }
    @GetMapping("/qt")
    public long getQtUsers() {
        return userRepository.count();
    }
    

    @PostMapping
    public User createUser(@RequestBody UserDto userDto) {
        User user = new User();
        user.setNome(userDto.getNome());
        user.setSenha(userDto.getSenha());
        user.setEmail(userDto.getEmail());
        user.setGithubName(userDto.getGithubName());
        user.setDiciplina(userDto.getDiciplina());
        System.out.println(userDto);
        return userRepository.save(user);
    }

}
