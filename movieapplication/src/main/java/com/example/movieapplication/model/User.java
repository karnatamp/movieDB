package com.example.movieapplication.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "User")
public class User {

    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @OneToOne
    @JoinColumn(name = "role", nullable = false)
    private Role role;

    @OneToOne
    @JoinColumn(name = "contact", nullable = false)
    private Contact contact;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<SeenMovies> movies;

    public void addSeenMovie(SeenMovies seenMovie) {
        this.movies.add(seenMovie);
    }

    public void setSeenMovie(Set<SeenMovies> movies) {
        this.movies = movies;
    }

    public User(String username, Role role, Contact contact) {
    }

    public User(String username, String password, Role role, Contact contact) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.contact = contact;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                ", contact=" + contact +
                '}';
    }
}
