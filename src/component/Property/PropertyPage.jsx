import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./PropertyPage.css";
import data from "../../data/properties.json";

export default function PropertyPage() {
  const { id } = useParams();
  const property = data?.properties?.find((p) => p.id === id);

  const pictures = Array.isArray(property?.pictures) ? property.pictures : [property?.picture];
  const [mainImage, setMainImage] = useState(pictures[0]);
  const [isFavourite, setIsFavourite] = useState(false);

  // Check if property is already in favourites
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    const exists = favs.some((fav) => fav.id === id);
    setIsFavourite(exists);
  }, [id]);

  const toggleFavourite = () => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    if (isFavourite) {
      // Remove from favourites
      const updatedFavs = favs.filter((fav) => fav.id !== id);
      localStorage.setItem("favourites", JSON.stringify(updatedFavs));
      setIsFavourite(false);
    } else {
      // Add to favourites
      favs.push(property);
      localStorage.setItem("favourites", JSON.stringify(favs));
      setIsFavourite(true);
    }
  };

  if (!property) return <p>No property found.</p>;

  return (
    <div className="property-page">
      <h1>{property.type}</h1>
      <p className="property-summary">
        £{property.price.toLocaleString()} · {property.location}
      </p>

      {/* Favourite Button */}
      <button
        className={`favourite-btn ${isFavourite ? "active" : ""}`}
        onClick={toggleFavourite}
      >
        {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
      </button>

      {mainImage && (
        <img src={mainImage} alt={property.type} className="main-image" />
      )}

      <div className="thumbnail-row">
        {pictures.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${property.type} thumbnail ${idx + 1}`}
            className={`thumbnail ${mainImage === img ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <p>{property.description}</p>
        </TabPanel>

        <TabPanel>
          <p>Floor plan details coming soon.</p>
        </TabPanel>

        <TabPanel>
          <iframe
            title="Property Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          />
        </TabPanel>
      </Tabs>
    </div>
  );
}
