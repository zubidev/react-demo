import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = props => {
  return (
      <div className="item">
        <div className="item-img">
          <img src={props.image} alt="moviethumb" />
        </div>
        <div className="item-content">
          <h2>{props.movieName}</h2>
          <p>{props.movieOverview.slice(0, 150)+'...' }</p>
        </div>
        <div className="clearfix"></div>
      </div>

  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
  movieOverview: PropTypes.string
};

export default MovieThumb;


