package com.example.movieapplication.repository;

import com.example.movieapplication.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.List;

public interface MovieRepo extends JpaRepository<Movie, String > {
    @Query("SELECT m FROM Movie m WHERE LOWER(m.title) = lower(?1)  AND  m.added = ?2 AND  lower(m.external_id) = lower(?3)")
    List<Movie> searchMovie(String title, Date date, String externalId);

    @Query("SELECT m FROM Movie m WHERE lower(m.external_id) = lower(?1)")
    List<Movie> searchMovieByExtrnalId( String externalId);

}
