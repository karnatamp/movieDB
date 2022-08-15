package com.example.movieapplication.repository;

import com.example.movieapplication.model.SeenMovies;
import com.example.movieapplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SeenMoviesRepo extends JpaRepository<SeenMovies,Integer > {
    @Query("SELECT m FROM SeenMovies m WHERE m.movie = ?1  AND  m.user = ?2")
    List<SeenMovies> searchMovieSeenByUser(SeenMovies movies, User user);

    @Query("SELECT m FROM SeenMovies m WHERE m.user = ?1")
    List<SeenMovies> getMoviesSeenByUser(User user);

}
