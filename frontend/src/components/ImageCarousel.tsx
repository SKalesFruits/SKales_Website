import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setCurrentIndex } from "../slices/home.slice";
import "../styles/ImageCarousel.css";

interface Props {
  images: Array<string>;
  autoPlayInterval: number;
}

const ImageCarousel: React.FC<Props> = ({ images, autoPlayInterval }) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentIndex = useSelector(
    (state: RootState) => state.home.currentIndex
  );

  const nextImage = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    dispatch(setCurrentIndex(nextIndex));
  };

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    dispatch(setCurrentIndex(newIndex));
  };

  useEffect(() => {
    const timer = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval, nextImage]);

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevImage}>
        &#8249;
      </button>
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <button className="carousel-button right" onClick={nextImage}>
        &#8250;
      </button>
    </div>
  );
};

export default ImageCarousel;
