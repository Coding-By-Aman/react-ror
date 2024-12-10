import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewAnime = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const stripHtmlEntities = (str) => {
    return String(str)
      .replace(/\n/g, "<br> <br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const onImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v1/animes/create";

    if (name.length === 0) return;

    const formData = new FormData();
    formData.append("anime[name]", name);
    formData.append("anime[description]", stripHtmlEntities(description));
    if (image) {
    formData.append("anime[image]", image);
    }



    const token = document.querySelector('meta[name="csrf-token"]').content;
    
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate(`/anime/${response.id}`))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new anime to our awesome anime collection.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="animeName">Anime name</label>
              <input
                type="text"
                name="name"
                id="animeName"
                className="form-control"
                required
                onChange={(event) => onChange(event, setName)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="animeDescription">About Anime</label>
              <input
                type="text"
                name="description"
                id="animeDescription"
                className="form-control"
                required
                onChange={(event) => onChange(event, setDescription)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="animeImage">Anime Image</label>
              <input
                type="file"
                name="image"
                id="animeImage"
                className="form-control"
                onChange={onImageChange}
              />
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Create Anime
            </button>
            <Link to="/animes" className="btn btn-link mt-3">
              Back to animes
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAnime;
