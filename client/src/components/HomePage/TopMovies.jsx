import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiFillHome} from 'react-icons/ai'

export default function TopMovies() {
    const topMovies = [{
        "title": "Dawn of the Planet of the Apes",
        "image": "https://image.tmdb.org/t/p/original/nIcZlG4DuAinlEkUzSIEmXy3F5v.jpg",
        "rating": 8.3,
        "releaseYear": 2014,
        "genre": ["Action", "Drama", "Sci-Fi"],
        "comments": ["Great movie", "Awesome movie", "I like this movie"]

    },
    {
        "title": "District 9",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m0iuTAifeqc147Di6ONIBQHaLH%26pid%3DApi&f=1",
        "rating": 8,
        "releaseYear": 2009,
        "genre": ["Action", "Sci-Fi", "Thriller"],
        "comments": []
    },
    {
        "title": "Transformers: Age of Extinction",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tROryTqLWKBggaA3GjBW_gHaLH%26pid%3DApi&f=1",
        "rating": 6.3,
        "releaseYear": 2014,
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "comments": []
    },
    {
        "title": "X-Men: Days of Future Past",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xflBOd8FGAiZKo2qM1sCQwHaK5%26pid%3DApi&f=1",
        "rating": 8.4,
        "releaseYear": 2014,
        "genre": ["Action", "Sci-Fi", "Thriller"]
        , "comments": []
    },
    {
        "title": "The Machinist",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j1uyXmNuT2ZrRJX-7Zk_cQHaIp%26pid%3DApi&f=1",
        "rating": 7.8,
        "releaseYear": 2004,
        "genre": ["Drama", "Thriller"]
        , "comments": []
    },
    {
        "title": "The Last Samurai",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1ufR3RGikWXV32hnLL9zRQHaFj%26pid%3DApi&f=1",
        "rating": 7.7,
        "releaseYear": 2003,
        "genre": ["Action", "Drama", "History"]
        , "comments": []
    },
    {
        "title": "The Amazing Spider-Man 2",
        "image": "https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0317_1024x1024.jpeg?v=1571444288",
        "rating": 7.3,
        "releaseYear": 2014,
        "genre": ["Action", "Adventure", "Fantasy"]
        , "comments": []
    },
    {
        "title": "Tangled",
        "image": "https://joebakerreviews.files.wordpress.com/2020/05/tangled_ver3_xxlg-1.jpg",
        "rating": 7.9,
        "releaseYear": 2010,
        "genre": ["Action", "Drama", "Sci-Fi"]
        , "comments": []
    },
    {
        "title": "Rush",
        "image": "https://www.regarder-films.net/wp-content/uploads/2018/07/rush.jpg",
        "rating": 8.3,
        "releaseYear": 2013,
        "genre": ["Animation", "Comedy", "Family"]
        , "comments": []
    },
    {
        "title": "Drag Me to Hell",
        "image": "http://images2.fanpop.com/images/photos/6300000/Drag-Me-to-Hell-wallpapers-horror-movies-6396121-1600-1200.jpg",
        "rating": 6.7,
        "releaseYear": 2009,
        "genre": ["Horror", "Thriller"]
        , "comments": []
    },
    {
        "title": "Despicable Me 2",
        "image": "http://www.aliciastella.com/blog/wp-content/uploads/2013/07/despicable-me-2-poster-1.jpg",
        "rating": 7.6,
        "releaseYear": 2013,
        "genre": ["Animation", "Comedy", "Family"]
        , "comments": []
    },
    {
        "title": "Kill Bill: Vol. 1",
        "image": "https://image.tmdb.org/t/p/original/xqEN1NC0BhsaGS71Lq51wwOxx8b.jpg",
        "rating": 8.2,
        "releaseYear": 2003,
        "genre": ["Action", "Crime"]
        , "comments": []
    },
    {
        "title": "A Bug's Life",
        "image": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409",
        "rating": 7.2,
        "releaseYear": 1998,
        "genre": ["Animation", "Adventure", "Comedy"]
        , "comments": []
    },
    {
        "title": "Life of Brian",
        "image": "http://image.tmdb.org/t/p/original/qfcvYmqFEaV24SnNVY7T7eHUk60.jpg",
        "rating": 8.9,
        "releaseYear": 1972,
        "genre": ["Comedy"]
        , "comments": []
    },
    {
        "title": "How to Train Your Dragon",
        "image": "https://static0.colliderimages.com/wordpress/wp-content/uploads/how-to-train-your-dragon-2-poster2.jpg",
        "rating": 8.2,
        "releaseYear": 2010,
        "genre": ["Animation", "Adventure", "Family"]
        , "comments": []
    }]
     const [data, setData] = useState( topMovies);
     const [Comments, setComments] = useState([]);

     const [search, setSearch] = useState(false);
     const [individualMovie, setIndividualMovie] = useState("");
   
    // list  50of top movies, contains the movie id ,title, image, and release date , rating , 50  records
    const handleIndividualMovie = (movie) => {
        // set searct to true
        setSearch(true);
        setIndividualMovie(movie);
    }
    const adddComments = (event) => {
        setComments(event.target.value);
        console.log(Comments);
    }


    const updateComments = () => {
        setIndividualMovie({ ...individualMovie, comments: [...individualMovie.comments, Comments] });
    }

    // post the commments to the mongo db
    
            
 
     
    // get local storage nodeon
        const nodeon = window.localStorage.getItem("nodeon");
        
    const listOfMovies = topMovies.map((movie, index) => {
        return (
            
                 <div className="min-movie-box" key={index} onClick={(e) => handleIndividualMovie(movie)}>
                    <div className="min-movie-image">
                        <img src={movie.image} alt="" srcSet="" />
                    </div>
                    <div className="min-movie-text">
                        <span> Title : <span> {movie.title}</span></span>
                        <p className="rating-movie">{movie.rating}</p> 
                    </div>     
                </div>   
        )
    })



    return (
      <div>

        {/* trending movies */}
        <div className="trending-container">
            <div className="trending-inner-container">
                <div className="trending-image">
                    <img src="https://imgs.search.brave.com/xhNSqoKI6nEX8DuBjB1pn6s9Y4GcxZH1No8mqcJvPq0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/Mkc4UFc2ZEtJSWk0/YnhVUThfS1Z3SGFF/SyZwaWQ9QXBp" alt=""  />
                </div>
                <div className="trending-text">
                    <h3> Title : <span> Avator</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    <div className="rating"></div>
                    <p className='genre-name'>Genre :</p>
                    <div className="genre">
                        <p>Action</p>
                        <p>Comedy</p>
                        <p>Adventure</p>

                    </div>
                    <div className="watch-buttons">
                        <div className="watch-button-b">
                            <p className='watch-button-btn'>Watch Now</p>
                        </div>
                        <div className="watch-trailer">
                            <p className='trailer'>Watch Trailer</p>    
                        </div>   
                    </div>
            </div>
        </div>

      </div>

      {/* Min list of movies */}
      {/* if search if false she list of moves else show individial */}

        {(search === false) ? 
         <div className="min-list-container" >
            <div className="min-list-inner-container">
            {listOfMovies}
            </div>
        </div>
                 : 
                 <div className="individualMovi">
                    <div className="back-btn">
                        {/* React icons home */}

                        <p onClick={() => setSearch(false)}>
                            <AiFillHome className='BrandLogo' style={{color:"#fff"}}/>
                        </p>
                    </div>
                    <div className="individualMovi-inner-container">
                        <div className="individualMovi-image">
                            <img src={individualMovie.image} alt="" srcSet="" />
                        </div>
                        <div className="individualMovi-text">
                            <h3> Title : <span> {individualMovie.title}</span></h3>
                            <p className="releasedat">Release date <span>{individualMovie.releaseYear}</span></p>
                            <p className="rating-movie">Ratings : {individualMovie.rating}</p>
                            <div className="genre">
                               {individualMovie.genre.map((genre, index) => {
                                      return <p key={index} className="type">{genre}</p>
                                 })}
                            </div> 
                        </div>
                    </div> 
                    <div className="comments">
                        <h1>Comments section</h1>
                                {individualMovie.comments.map((comment, index) => {
                                    return <p key={index} className="comments-text">{comment}</p>
                                })}
                    </div>  
                    <div className="space">
                        <h1>Add your Cooments</h1>
                        <textarea className="comments-textarea" placeholder="Add your comments here" onChange={adddComments}></textarea>    
                        <div className="btn btn-success" onClick={updateComments}>submit</div> 
                    </div>
                 </div>
        }

    </div>
    )
  }


