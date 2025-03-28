import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your dish photos
import dishPhoto1 from "./assets/Bhaji [Regular, Serves 2].png";
import dishPhoto2 from "./assets/paubhaji.png";
import dishPhoto3 from "./assets/Kashmiri Pulao.png";
import dishPhoto4 from "./assets/Kilogram Special Bhaji.png";
import dishPhoto5 from "./assets/Paneer Bhaji.png";
import dishPhoto6 from "./assets/kg.png";

const SpecialDishesSlider = () => {
  const dishes = [
    { id: 1, name: "Regular Bhaji", photo: dishPhoto1 },
    { id: 4, name: "Kilogram Sp Bhaji", photo: dishPhoto4 },
    { id: 5, name: "Paneer Bhaji", photo: dishPhoto5 },
    { id: 2, name: "Pau Bhaji", photo: dishPhoto2 },
    { id: 3, name: "Veg Pulao", photo: dishPhoto3 },
    { id: 6, name: "Kilogram Sp Pulao", photo: dishPhoto6 },
  ];

  const itemsPerPage = 5;
  const autoScrollInterval = 4000; // Auto-scroll every 3 seconds

  const [currentIndex, setCurrentIndex] = useState(itemsPerPage);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // Create cloned slides for smooth infinite scrolling
  const loopDishes = [
    ...dishes.slice(-itemsPerPage), // Clone last few
    ...dishes, // Original
    ...dishes.slice(0, itemsPerPage), // Clone first few
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex >= loopDishes.length - itemsPerPage) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Reset the slider when reaching clone edges
  useEffect(() => {
    let timeout;
    if (currentIndex >= loopDishes.length - itemsPerPage) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(itemsPerPage);
      }, 500);
    } else if (currentIndex <= 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(loopDishes.length - itemsPerPage * 2);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, loopDishes.length]);

  return (
    <section id="special-dishes" className="special-dishes scrolling-reviews">
      <div className="special-dishes-slider-container">
        <h2 className="blue-text">Special Dishes</h2>

        <div className="slider-wrapper">
          <button className="slider-nav prev" onClick={prevSlide}>
            <ChevronLeft size={24} color="white" />
          </button>
          
          <div className="dish-slider">
            <div
              ref={sliderRef}
              className="dish-slider-inner"
              style={{
                display: "flex",
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
              }}
            >
              {loopDishes.map((dish, index) => (
                <div key={index} className="dish-card">
                  <img src={dish.photo} alt={dish.name} className="dish-image" />
                  <h3 className="dish-name">{dish.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-nav next" onClick={nextSlide}>
            <ChevronRight size={24} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishesSlider;