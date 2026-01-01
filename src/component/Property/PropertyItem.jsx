import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PropertyCard.css";

function PropertyItem({ property }) {
  if (!property) return null;

  // Local favourites state (can also sync with localStorage)
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // Check if this property is already in favourites
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFav(favs.some((fav) => fav.id === property.id));
  }, [property.id]);

  const toggleFavourite = () => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    let updatedFavs;

    if (isFav) {
      // Remove from favourites
      updatedFavs = favs.filter((fav) => fav.id !== property.id);
      setIsFav(false);
    } else {
      // Add to favourites
      updatedFavs = [...favs, property];
      setIsFav(true);
    }

    localStorage.setItem("favourites", JSON.stringify(updatedFavs));
  };

  return (
    <div className="property-card">
      <img
        src={
          property.pictures
            ? property.pictures[0]
            : property.picture || "https://via.placeholder.com/300x220"
        }
        alt={`Property in ${property.location || "Unknown Location"}`}
        className="property-img"
      />

      <div className="property-info">
        <h3>£{property.price?.toLocaleString() || "N/A"}</h3>

        <p className="property-desc">
          {property.description
            ? `${property.description.substring(0, 100)}...`
            : "No description available."}
        </p>

        <p className="property-meta">
          {property.bedrooms ?? "N/A"} Beds · {property.location || "Unknown"}
        </p>

        <div className="property-actions">
          <Link to={`/property/${property.id}`} className="property-link">
            View Property
          </Link>

          {/* Favourites icon */}
          <span
            className={`fav-icon ${isFav ? "fav-active" : ""}`}
            onClick={toggleFavourite}
            title={isFav ? "Remove from favourites" : "Add to favourites"}
          >
            ♥
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyItem;
