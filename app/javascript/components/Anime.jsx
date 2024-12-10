import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Anime = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState({ ingredients: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        console.log(response.image); // Debugging: Check the image URL
        setAnime(response);
      })
      .catch(() => navigate("/animes"));
  }, [params.id]);  
  

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const animeDescription = addHtmlEntities(anime.description);
  
  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
        src={anime.image}
        alt={`${anime.name} image`}
        className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {anime.name}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">About {anime.name}</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: `${animeDescription}`,
              }}
            />
          </div>
          {/* <div className="col-sm-12 col-lg-2">
            <button
              type="button"
              className="btn btn-danger"
            >
              Delete anime
            </button>
          </div> */}
        </div>
        <Link to="/animes" className="btn btn-link">
          Back to animes
        </Link>
      </div>
    </div>
  );
};

export default Anime;