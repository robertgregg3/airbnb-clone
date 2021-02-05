import { FavoriteBorder, Star } from "@material-ui/icons";
import React from "react";
import "../css/SearchResults.css";

function SearchResult({
  img,
  location,
  description,
  price,
  star,
  total,
  title,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt={description} />
      <FavoriteBorder className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <p>{title}</p>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <Star className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
