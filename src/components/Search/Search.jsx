import React, { useState, useRef, useEffect } from "react";
import "./Search.scss";
import shop1 from "../../assets/images/search/1.jpg";
import shop2 from "../../assets/images/search/2.jpg";
import shop3 from "../../assets/images/search/3.jpg";
import shop4 from "../../assets/images/search/4.jpg";
import shop5 from "../../assets/images/search/5.jpg";
import shop6 from "../../assets/images/search/6.jpg";
import shop7 from "../../assets/images/search/7.jpg";
import shop8 from "../../assets/images/search/8.jpg";
import shop9 from "../../assets/images/search/9.webp";
import shop10 from "../../assets/images/search/10.jpg";
import shop11 from "../../assets/images/search/11.jpg";
import shop12 from "../../assets/images/search/12.jpg";
import shop13 from "../../assets/images/search/13.jpg";
import shop14 from "../../assets/images/search/14.jpg";

const products = [
  // Home Decor
  { name: "Glassware", page: "home-decor", image: shop1 },
  { name: "Lights", page: "home-decor", image: shop2 },
  { name: "Mirrors", page: "home-decor", image: shop3 },
  { name: "Faucets", page: "home-decor", image: shop4 },
  { name: "Showers", page: "home-decor", image: shop5 },
  { name: "Chimneys", page: "home-decor", image: shop6 },
  { name: "Sinks", page: "home-decor", image: shop7 },
  { name: "Bath Elegance", page: "home-decor", image: "/mugil-elite-mart/assets/images/products/bath-elegence/1.png" },

  // Products
  { name: "Door Handles", page: "products", image: "/mugil-elite-mart/assets/images/products/locks/1.jpg" },
  { name: "Queen Lock Set", page: "products", image: "/mugil-elite-mart/assets/images/products/queenlock-set/1.jpg" },
  { name: "Pull Handles", page: "products", image: "/mugil-elite-mart/assets/images/products/pull-handles/1.jpg" },
  { name: "Door Pull Lock Set", page: "products", image: "/mugil-elite-mart/assets/images/products/door-pull-lock/1.jpg" },
  { name: "Door Closer", page: "products", image: "/mugil-elite-mart/assets/images/products/door-hinges/1.jpg" },
  { name: "Handles", page: "products", image: "/mugil-elite-mart/assets/images/products/handles/handle-1.webp" },
  { name: "Aluminum Profile", page: "products", image: shop10 },
  { name: "Hardware", page: "products", image: shop11 },
  { name: "Pipes", page: "products", image: shop12 },
  { name: "Ceiling Fans", page: "products", image: shop13 },
  { name: "Exhaust Fans", page: "products", image: shop14 },
  { name: "Paints", page: "products", image: "/mugil-elite-mart/assets/images/products/paints/asian-paint-3.png" },
  { name: "Doors", page: "products", image: "/mugil-elite-mart/assets/images/doors/1.png" },
];

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
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
    window.location.href = `/mugil-elite-mart/${product.page}.html#${id}`;

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
            <li
              className="suggestion-wrap"
              key={index}
              onClick={() => handleSelect(product)}
            >
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
