
import { useState } from "react";
import { DropdownList, NumberPicker, DateTimePicker } from "react-widgets";
import PropertyItem from "../Property/PropertyItem";
import data from "../../data/properties.json";
import "react-widgets/styles.css";
import "./SearchForm.css";
import Heading from "../Structure/Heading";

function SearchForm() {
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [minBedrooms, setMinBedrooms] = useState();
  const [maxBedrooms, setMaxBedrooms] = useState();
  const [postcode, setPostcode] = useState("");
  const [dateAdded, setDateAdded] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(data.properties);

  const handleSearch = () => {
    const results = data.properties.filter((prop) => {
      if (type !== "Any" && prop.type !== type) return false;
      if (minPrice && prop.price < minPrice) return false;
      if (maxPrice && prop.price > maxPrice) return false;
      if (minBedrooms && prop.bedrooms < minBedrooms) return false;
      if (maxBedrooms && prop.bedrooms > maxBedrooms) return false;
      if (postcode && !prop.location.toLowerCase().includes(postcode.toLowerCase()))
        return false;
      if (dateAdded) {
        const propDate = new Date(`${prop.added.year}-${prop.added.month}-${prop.added.day}`);
        if (propDate < dateAdded) return false;
      }
      return true;
    });
    setFilteredProperties(results);
  };

  return (
    <div>
      <section className="search-page">
        <div className="container">
          <Heading
            title="Search Your Next Home"
            subtitle="Find new & featured property located in your local city."
          />

          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="box">
              <h4>Type</h4>
              <DropdownList
                data={["Any", "House", "Flat"]}
                value={type}
                onChange={setType}
              />
            </div>

            <div className="box">
              <h4>Min Price</h4>
              <NumberPicker value={minPrice} onChange={setMinPrice} />
            </div>

            <div className="box">
              <h4>Max Price</h4>
              <NumberPicker value={maxPrice} onChange={setMaxPrice} />
            </div>

            <div className="box">
              <h4>Min Beds</h4>
              <NumberPicker value={minBedrooms} onChange={setMinBedrooms} />
            </div>

            <div className="box">
              <h4>Max Beds</h4>
              <NumberPicker value={maxBedrooms} onChange={setMaxBedrooms} />
            </div>

            <div className="box">
              <h4>Date</h4>
              <DateTimePicker
                value={dateAdded}
                onChange={setDateAdded}
                time={false}
              />
            </div>

            <div className="box">
              <h4>Postcode</h4>
              <input
                type="text"
                placeholder="Enter postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>

            <div className="box search-btn">
              <button type="button" onClick={handleSearch}>
                <i className="fas fa-search"></i> Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section with Headings */}
      <section className="results-section">
        <h2 className="main-heading">Properties Available</h2>
        <h3 className="results-heading">
          {filteredProperties.length}{" "}
          {filteredProperties.length === 1 ? "Property Found" : "Properties Found"}
        </h3>

        <div className="results-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop) => (
              <PropertyItem key={prop.id} property={prop} />
            ))
          ) : (
            <p>No properties match your search.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default SearchForm;


