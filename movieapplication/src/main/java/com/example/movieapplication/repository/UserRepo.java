package com.example.movieapplication.repository;

import com.example.movieapplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface UserRepo extends JpaRepository<User, String> {

    List<User> findByUsernameAndPassword(String userName, String password);
    @Modifying
    @Transactional
    @Query("update User u set u.username = ?2, u.password = ?3 where u.username = ?1")
    public void updateUser(String oldUsername, String newUsername, String newPassword);


}
