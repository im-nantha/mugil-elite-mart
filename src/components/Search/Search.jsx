import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss";
import shop1 from "../../assets/images/shop-by-category/door.jpg";
import shop2 from "../../assets/images/shop-by-category/kitchen.webp";
import shop3 from "../../assets/images/shop-by-category/solutions.jpg";
import shop4 from "../../assets/images/shop-by-category/electricals.jpg";
import shop5 from "../../assets/images/shop-by-category/plywood.png";
import shop6 from "../../assets/images/shop-by-category/door.jpg";
import shop7 from "../../assets/images/shop-by-category/kitchen.webp";
import shop8 from "../../assets/images/shop-by-category/solutions.jpg";
import shop9 from "../../assets/images/shop-by-category/electricals.jpg";
import shop10 from "../../assets/images/shop-by-category/plywood.png";
import shop11 from "../../assets/images/shop-by-category/door.jpg";
import shop12 from "../../assets/images/shop-by-category/kitchen.webp";
import shop13 from "../../assets/images/shop-by-category/electricals.jpg";
import shop14 from "../../assets/images/shop-by-category/plywood.png";

const products = [
  // Home Decor
  { name: "Glassware", page: "home-decor", image: shop1 },
  { name: "Lights", page: "home-decor", image: shop2 },
  { name: "Mirrors", page: "home-decor", image: shop3 },
  { name: "Faucets", page: "home-decor", image: shop4 },
  { name: "Showers", page: "home-decor", image: shop5 },
  { name: "Chimneys", page: "home-decor", image: shop6 },
  { name: "Sinks", page: "home-decor", image: shop7 },

  // Products
  { name: "Plywood", page: "products", image: shop8 },
  { name: "Locks", page: "products", image: shop9 },
  {
    name: "Aluminum Profile",
    page: "products",
    image: shop10,
  },
  { name: "Hardware", page: "products", image: shop11 },
  { name: "Pipes", page: "products", image: shop12 },
  {
    name: "Ceiling Fans",
    page: "products",
    image: shop13,
  },
  {
    name: "Exhaust Fans",
    page: "products",
    image: shop14,
  },
];

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const navigate = useNavigate();
  const boxRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim() === "") {
      setFiltered(products); // show all when input empty
      return;
    }

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(results);
  };

  const handleSelect = (product) => {
    const id = product.name.toLowerCase().replace(/\s+/g, "-"); // kebab-case
    navigate(`/${product.page}#${id}`);
    setKeyword("");
    setFiltered(products);
    setIsOpen(false);
    setIsPinned(false);
  };

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        if (isPinned || keyword.trim() !== "") {
          setIsOpen(false);
          setIsPinned(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPinned, keyword]);

  return (
    <div
      className="search-box"
      ref={boxRef}
      onMouseEnter={() => {
        if (!isPinned) {
          setFiltered(products);
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (!isPinned) {
          setIsOpen(false);
        }
      }}
    >
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          value={keyword}
          onChange={handleChange}
          onClick={() => {
            setIsPinned(true);
            setFiltered(products);
            setIsOpen(true);
          }}
          className="form-control"
          placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {isOpen && filtered.length > 0 && (
        <ul className="suggestions">
          {filtered.map((product, index) => (
            <li className="suggestion-wrap" key={index} onClick={() => handleSelect(product)}>
              <img src={product.image} className="suggestion-img" />
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
