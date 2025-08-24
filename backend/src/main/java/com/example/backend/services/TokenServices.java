package com.example.backend.services;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.backend.model.Token;
import com.example.backend.model.User;
import com.example.backend.model.UserRole;

@Service
public class TokenServices {
    private Instant expiresAt = LocalDateTime.now().plusMinutes(120).toInstant(ZoneOffset.ofHours(-3));

    private Algorithm algorithm = Algorithm.HMAC256("secret");

    public Token createToken(User user) {
        var jwt = JWT.create()
                .withSubject(String.valueOf(user.getId()))
                .withClaim("email", user.getEmail())
                .withClaim("role", user.getRole().toString())
                .withExpiresAt(expiresAt)
                .sign(algorithm);

        return new Token(jwt, user.getEmail(), user.getGithub());

    }

    public User getUserFromToken(String jwt) {
        var jwtVerified = JWT.require(algorithm).build().verify(jwt);
        String role = jwtVerified.getClaim("role").asString();
        return User.builder()
                .id(Long.valueOf(jwtVerified.getSubject()))
                .email(jwtVerified.getClaim("email").toString())
                .role(UserRole.valueOf(role))
                .build();

    }
}
