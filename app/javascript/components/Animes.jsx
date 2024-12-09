import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Animes = () => {
    const navigate = useNavigate();
    const [animes, setAnimes] = useState([]);
    useEffect(() => {
        const url = "/api/v1/animes/index";
        fetch(url)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((res) => setAnimes(res))
          .catch(() => navigate("/"));
      }, []);

      const allAnimes = animes.map((anime, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card mb-4">
            <img
              src={anime.image}
              className="card-img-top"
              alt={`${anime.name} image`}
            />
            <div className="card-body">
              <h5 className="card-title">{anime.name}</h5>
              <Link to={`/anime/${anime.id}`} className="btn custom-button">
                View Anime
              </Link>
            </div>
          </div>
        </div>
      ));
      const noAnime = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
          <h4>
            No animes yet. Why not <Link to="/new_anime">create one</Link>
          </h4>
        </div>
      );
    
      return (
        <>
          <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
              <h1 className="display-4">Animes for everyone</h1>
              <p className="lead text-muted">
                Discover our curated collection of anime series, from beloved
                classics to the latest seasonal releases. Whether you're into
                action, romance, or slice of life, there's an adventure waiting
                for you.
              </p>
            </div>
          </section>
          <div className="py-5">
            <main className="container">
              <div className="text-end mb-3">
                <Link to="/anime" className="btn custom-button">
                  Create New Anime
                </Link>
              </div>
              <div className="row">
                {animes.length > 0 ? allAnimes : noAnime}
              </div>
              <Link to="/" className="btn btn-link">
                Home
              </Link>
            </main>
          </div>
        </>
      );
  };
  
  export default Animes;