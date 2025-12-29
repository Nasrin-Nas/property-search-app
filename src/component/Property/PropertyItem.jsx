
import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyItem({ property }) {
  if (!property) return null; // prevents crash if property is undefined

  return (
    <div className="property-card">
      <img
        src={property.picture || "https://via.placeholder.com/300x220"} // fallback image
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

        {property.id ? (
          <Link
            to={`/property/${property.id}`} // route to PropertyPage
            className="property-link"
          >
            View Property
          </Link>
        ) : (
          <span className="property-link">No link available</span>
        )}
      </div>
    </div>
  );
}

export default PropertyItem;
