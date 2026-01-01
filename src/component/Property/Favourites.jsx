// FavouritesPage.jsx
import React, { useState, useEffect } from "react";
import PropertyItem from "../Property/PropertyItem";
import "./Favourites.css";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(favs);
  }, []);

  if (favourites.length === 0) {
    return <p className="favourites-empty">No favourites yet.</p>;
  }

  return (
    <div className="favourites-page">
      <h1>My Favourites</h1>
      <div className="favourites-grid">
        {favourites.map((property) => (
          <PropertyItem key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
