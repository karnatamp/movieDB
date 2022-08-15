package com.example.movieapplication.dto;

public class MovieDTO {
    private String external_id;

    public MovieDTO(String external_id) {
        this.external_id = external_id;
    }

    public String getExternal_id() {
        return external_id;
    }

    public void setExternal_id(String external_id) {
        this.external_id = external_id;
    }


}
