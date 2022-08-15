package com.example.movieapplication.controller;

import com.example.movieapplication.model.Contact;
import com.example.movieapplication.model.User;
import com.example.movieapplication.repository.ContactRepo;
import com.example.movieapplication.repository.RoleRepo;
import com.example.movieapplication.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

public class UserController {
    @Autowired
    UserRepo userRepository;
    @Autowired
    ContactRepo contactRepository;

    @Autowired
    RoleRepo roleRepository;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User req) {
        try {
            System.out.println(req.getContact());
            Contact contact = contactRepository.save(req.getContact());
            User new_user = userRepository.save(new User(
                    req.getUsername(),
                    req.getPassword(),
                    req.getRole(),
                    contact)
            );
            new_user.setPassword(null);
            return new ResponseEntity<>(new_user, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User req) {
        try {
            List<User> foundUsers = new ArrayList<>(userRepository.findByUsernameAndPassword(req.getUsername(), req.getPassword()));
            if (foundUsers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            User loggedUser = new User(foundUsers.get(0).getUsername(),foundUsers.get(0).getRole(), foundUsers.get(0).getContact());

            loggedUser.setPassword(null);
            return new ResponseEntity<>(loggedUser, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
