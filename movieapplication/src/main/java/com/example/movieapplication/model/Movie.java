package com.example.movieapplication.model;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
@Table(name = "Movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String  id;

    @Column(name="title")
    private String title;
    @Column(name = "added")
    private Date added;

    @Column(name = "external_id")
    private String external_id;

    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    private Set<SeenMovies> users;

    public Movie(String title, Date added, String external_id) {
        this.title = title;
        this.added = added;
        this.external_id = external_id;
    }

    public Movie() {
    }
    public void addSeenMovies(SeenMovies seenMovie) {
        this.users.add(seenMovie);
    }
    public void setSeenMovies(Set<SeenMovies> users) {
        this.users = users;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getadded() {
        return added;
    }

    public void setadded(Date added) {
        this.added = added;
    }

    public String getExternal_id() {
        return external_id;
    }

    public void setExternal_id(String external_id) {
        this.external_id = external_id;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", date_added=" + added +
                ", external_id='" + external_id + '\'' +
                '}';
    }
}
