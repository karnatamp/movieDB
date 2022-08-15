package com.example.movieapplication.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "SeenMovies")
public class SeenMovies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "Users")
    private User user;

    @ManyToOne
    @JoinColumn(name = "Movie")
    private Movie movie;

    @Column(name = "Date")
    private Date date;

    public SeenMovies() {
    }

    public SeenMovies(User user, Movie movie, Date date) {
        this.user = user;
        this.movie = movie;
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "SeenMovies{" +
                "user=" + user +
                ", movie=" + movie +
                ", date=" + date +
                '}';
    }
}
