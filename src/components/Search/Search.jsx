import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss";

const products = [
  // Home Decor
  { name: "Glassware", page: "home-decor" },
  { name: "Lights", page: "home-decor" },
  { name: "Mirrors", page: "home-decor" },
  { name: "Faucets", page: "home-decor" },
  { name: "Showers", page: "home-decor" },
  { name: "Chimneys", page: "home-decor" },
  { name: "Sinks", page: "home-decor" },

  // Products
  { name: "Plywood", page: "products" },
  { name: "Locks", page: "products" },
  { name: "Aluminum Profile", page: "products" },
  { name: "Hardware", page: "products" },
  { name: "Pipes", page: "products" },
  { name: "Ceiling Fans", page: "products" },
  { name: "Exhaust Fans", page: "products" },
];

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(results);
  };

  const handleSelect = (product) => {
    const id = product.name.toLowerCase().replace(/\s+/g, "-"); // convert to kebab-case
    navigate(`/mugil-elite-mart/${product.page}#${id}`);
    setKeyword(""); // clear input
    setFiltered([]);
  };

  return (
    <div className="search-box">
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          value={keyword}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {filtered.length > 0 && (
        <ul className="suggestions">
          {filtered.map((product, index) => (
            <li key={index} onClick={() => handleSelect(product)}>
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;