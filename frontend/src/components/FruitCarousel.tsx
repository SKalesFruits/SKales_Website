import React from "react";
import "../styles/FruitCarousel.css";
import Apple from "../resources/apple.svg";
import Kiwi from "../resources/kiwi.svg";
import Banana from "../resources/banana.svg";
import Grapes from "../resources/grapes.svg";
import Watermelon from "../resources/watermelon.svg";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Apple",
    image: Apple,
    description: "Fresh and crisp apples.",
  },
  {
    id: 2,
    name: "Banana",
    image: Banana,
    description: "Sweet and ripe bananas.",
  },
  {
    id: 3,
    name: "Kiwi",
    image: Kiwi,
    description: "Juicy and tangy Kiwis.",
  },
  {
    id: 4,
    name: "Grapes",
    image: Grapes,
    description: "Fresh and Juicy Grapes",
  },
  {
    id: 5,
    name: "WaterMelon",
    image: Watermelon,
    description: "Juicy Watermelons.",
  },
];

const FruitCarousel: React.FC = () => {
  return (
    <div className="carousel-container-fruits">
      <h2 className="carousel-title-fruits">
        Hot Sellers: The Fruits Flying Off the Shelves
      </h2>
      <p className="carousel-subtitle-fruits">
        “ Indulge in the fruits our customers love most! These top sellers are
        picked for their unbeatable freshness and flavor ”
      </p>
      <div className="carousel-fruits">
        {products.map((product) => (
          <div key={product.id} className="card-fruits">
            <img
              src={product.image}
              alt={product.name}
              className="card-image-fruits"
            />
            <div className="card-content-fruits">
              <h3 className="card-title-fruits">{product.name}</h3>
              <p className="card-description-fruits">{product.description}</p>
              <a
                href={`/products?id=${product.id}`}
                className="view-button-fruits"
              >
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitCarousel;
