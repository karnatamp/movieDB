package com.example.movieapplication.dto;

public class SeenMoviesDTO {
    private String username;
    private String externalId;
    private String date;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getExternalId() {
        return externalId;
    }

    public void setExternalId(String externalId) {
        this.externalId = externalId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "SeenMoviesDTO{" +
                "username='" + username + '\'' +
                ", externalId='" + externalId + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
