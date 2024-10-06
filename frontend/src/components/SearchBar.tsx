import React, { useState, useEffect } from "react";
import "../styles/SearchBar.css";

interface Product {
  id: number;
  title: string;
  photoUrl: string;
}

interface SearchBarProps {
  products: Product[];
}

const SearchBar: React.FC<SearchBarProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setIsOpen(true);
    } else {
      setFilteredProducts([]);
      setIsOpen(false);
    }
  }, [searchTerm, products]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionClick = (product: Product) => {
    setSearchTerm(product.title);
    setIsOpen(false);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for products..."
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
      />
      {isOpen && (
        <div className="dropdown-menu">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="dropdown-item"
              onClick={() => handleOptionClick(product)}
            >
              <img
                src={product.photoUrl}
                alt={product.title}
                className="dropdown-item-photo"
              />
              <span className="dropdown-item-title">{product.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
