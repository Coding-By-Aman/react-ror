import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Anime Digest</h1>
        <p className="lead">
           List of best anime for beginners.
        </p>
        <hr className="my-4" />
        <Link
          to="/anime"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Anime
        </Link>
      </div>
    </div>
  </div>
);