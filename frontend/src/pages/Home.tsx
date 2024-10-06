import React, { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";
import SearchAndCategoryBar from "../components/SearchAndCategoryBar";
import "../styles/Home.css";
import { imgCarousel } from "../config/ImgCarouselConfig";
import FruitTipCard from "../components/FruitTipCard";
import FruitCarousel from "../components/FruitCarousel";
import Specialities from "../components/Specialities";
import FeedBackHome from "../components/FeedBackHome";
import OrderNowBanner from "../components/OrderNowBanner";
import Footer from "../components/Footer";
import axios from "axios";

const Home: React.FC = () => {
  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const orders = await axios.post(
          "http://127.0.0.1:5000/order/user/fetch",
          {
            user_id: 1,
          }
        );

        if (orders.status === 200) {
          console.log(orders.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    // if (sessionStorage.getItem("user_id")) {
    getAllOrders();
    // }
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <SearchAndCategoryBar />
        <FruitTipCard />
        <ImageCarousel images={imgCarousel} autoPlayInterval={3000} />
        <FruitCarousel />
        <Specialities />
        <FeedBackHome />
        <OrderNowBanner />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
