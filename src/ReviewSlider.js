import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import user photos
import userPhoto1 from "./assets/user1.jpg";
import userPhoto2 from "./assets/user2.jpg";
import userPhoto3 from "./assets/user3.jpg";
import userPhoto4 from "./assets/user4.jpg";
import userPhoto5 from "./assets/user5.jpg";

const ReviewsSlider = () => {
  const reviews = [
    { id: 1, name: "jasmin patel", photo: userPhoto1, review: "Best Pavbhaji in this area Never tasted this amazing bhajji", rating: 4.5 },
    { id: 2, name: "Naresh Panara", photo: userPhoto2, review: "Very Good test of Bhajipav and pulav,Combo offers 500 gram bhajipav with pulav free @Rs. 240", rating: 4.0 },
    { id: 3, name: "Abhign Vala", photo: userPhoto2, review: "One of the Delicious Pav bhaji and Pulav.Test is awesome.😋Service is very good .😉", rating: 5.0 },
    { id: 4, name: "Kasyap Trivedi", photo: userPhoto4, review: "Such a good food Quality, good Responsive Staff & Such a time to Make Ahemdabad Testy.", rating: 5.0 },
    { id: 5, name: "Pratik Jani", photo: userPhoto5, review: "One of the best place in ahemdabad for pavbhaji, price & quality of food is classic", rating: 4.8 },
    { id: 6, name: "Vishal Kapadne", photo: userPhoto4, review: "Super quality, delicious food, great combination of combo pulav and bhaji paw..", rating: 5 },
    { id: 7, name: "Fatima Khan", photo: userPhoto3, review: "Best food and good discounts on swiggy😍🤍loved it ", rating: 5.0 },
    { id: 8, name: "Karan Joshi", photo: userPhoto1, review: "Bhaiyo pavbhaji ek number che,", rating: 4.5 },
    { id: 9, name: "Kirtan Patel", photo: userPhoto2, review: "Better than manek chowk pav bhaji. So tasty, so delicious, just tasting like a woww🫠😉", rating: 5.0 },
    { id: 10, name: "Ajay Sadhu", photo: userPhoto5, review: "Deserve more than five star..... Quality Food .... Quality People.... Delicious 😋", rating: 4.8 },
    { id: 11, name: "Sanjoy", photo: userPhoto1, review: "Great place to eat good food in reasonable price with great ambience. Staff and owner are very kind", rating: 4.5 },
    { id: 12, name: "Bhagy", photo: userPhoto2, review: "Excellent food with a perfect blend of flavors! The staff was welcoming, and the atmosphere was warm and inviting. Definitely a must-visit", rating: 5.0 },
    { id: 13, name: "TRUPTEE KACHHADIYA", photo: userPhoto3, review: "Better than I thought. The food are delicious and different from the others", rating: 4.8 },

  
  
  
  
  ];

  const itemsPerPage = 5;
  const autoScrollInterval = 3000; // Auto-scroll every 3 seconds

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Create cloned slides for smooth infinite scrolling
  const loopReviews = [
    ...reviews,
    ...reviews,
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If we've reached the end of the first set of reviews, reset to the beginning
      // but make it appear seamless
      if (prevIndex >= reviews.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If we've gone before the start, move to the end of the first set
      if (prevIndex <= 0) {
        return reviews.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (
    <section id="reviews" className="reviews scrolling-reviews">
      <div className="reviews-slider-container">
        <h2 className="blue-text">Popular Customer Reviews</h2>

        <div className="slider-wrapper">
          <button className="slider-nav prev" onClick={prevSlide}>
            <ChevronLeft size={24} color="white" />
          </button>

          <div className="review-slider">
            <div
              ref={sliderRef}
              className="review-slider-inner"
              style={{
                display: "flex",
                transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
         {loopReviews.map((review, index) => (
  <div key={index} className="review-card" data-aos="fade-up" data-aos-delay={index * 100}>
    <img src={review.photo} alt={review.name} className="customer-image" />
    <h3 className="customer-name">{review.name}</h3>
    <p className="customer-review">"{review.review}"</p>
    <div className="rating">{review.rating.toFixed(1)}</div>
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < review.rating ? "★" : "☆"}</span>
      ))}
                  </div>
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

export default ReviewsSlider;