import { useState } from "react";
import "./App.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Sample product data (can be replaced with actual API data)
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99.99" },
    { id: 2, name: "Smartwatch", price: "$149.99" },
    { id: 3, name: "Gaming Mouse", price: "$49.99" },
    { id: 4, name: "Mechanical Keyboard", price: "$89.99" },
    { id: 5, name: "Bluetooth Speaker", price: "$59.99" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-4">
        <div className="container-fluid">
          <a className="navbar-brand text-indigo-600 fw-bold fs-4" href="#">
            TrendKart
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-dark fw-semibold" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu border-0 shadow-sm">
                  <li>
                    <a className="dropdown-item" href="#">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Home & Living
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2 rounded-pill shadow-sm"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-indigo rounded-pill px-3" type="submit">
                Search
              </button>
            </form>

            {/* Login Button */}
            <button className="btn btn-outline-indigo ms-3 rounded-pill px-4">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Search Results */}
      {filteredProducts.length > 0 && (
        <div className="container mt-3">
          <h5 className="text-indigo-600">Search Results:</h5>
          <ul className="list-group">
            {filteredProducts.map((product) => (
              <li key={product.id} className="list-group-item">
                {product.name} - <span className="text-success">{product.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
