package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.backend.repository.UserRepository;

@Service
public class AuthServices implements UserDetailsService {
    
        @Autowired
        private UserRepository userRepository;
    
        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            return userRepository.findByEmail(username).orElseThrow(
                    () -> new UsernameNotFoundException("Usuario não encontrado"));
        }
    
}
