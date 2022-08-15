package com.example.movieapplication.repository;

import com.example.movieapplication.model.Role;

import com.example.movieapplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoleRepo extends JpaRepository<Role,String> {
    //@Query("SELECT m FROM Role m WHERE m.name = ?1  AND  m.name = ?2")
    //List<Role> searchRoleByUser(Role role, User user);


}
