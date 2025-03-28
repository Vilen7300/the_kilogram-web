import React, { useState, useEffect, useRef } from 'react';
import ReviewsSlider from './ReviewSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './assets/The KiloGram.svg';
import mainmenu from './assets/mainmenu.png';
import aboutIcon from './assets/list.png';
import menuIcon from './assets/fast-food.png';
import reviewsIcon from './assets/rating.png';
import contactIcon from './assets/contact-us.png';
import menu1 from "./assets/menu1.png";
import menu2 from './assets/menu2.png';
import googleIcon from './assets/google.png';
import swiggyIcon from './assets/swiggy.png';
import zomatoIcon from './assets/zomato.png';
import addressIcon from './assets/pin (1).png';
import phoneIcon from './assets/phone-call.png';
import emailIcon from './assets/gmail.png';
import instagram from './assets/pngwing.com.png';
import user1 from './assets/himachal.png';
import user2 from './assets/dev.png';
import SpecialDishesSlider from './SpecialDishesSlider';import './App.css';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);


  const toggleMenu = () => setMenuVisible(!menuVisible);

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <div className="App">
      <div className="sticky-button-group">
        <button className="animated-buttonstyle " onClick={toggleMenu}>
          <img src={mainmenu} alt="Menu" className="button-iconstyle" />
        </button>
        {menuVisible && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <button className="animated-button" onClick={() => scrollToSection('about')}>
              <img src={aboutIcon} alt="About Us" className="button-icon" />
              About Us
            </button>
            <button className="animated-button" onClick={() => scrollToSection('menu')}>
              <img src={menuIcon} alt="Menu" className="button-icon" />
              Menu
            </button>
            <button className="animated-button" onClick={() => scrollToSection('reviews')}>
              <img src={reviewsIcon} alt="Reviews" className="button-icon" />
              Reviews
            </button>
            <button className="animated-button" onClick={() => scrollToSection('contact')}>
              <img src={contactIcon} alt="Contact" className="button-icon" />
              Contact
            </button>
          </div>
        )}
      </div>

      <header className="App-header">
        <div className="logo-container">
          <img src={logo} alt="The KiloGram Logo" className="animated-logo" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
          <section className="header">
            <h1>
              <span className="white-text">✨ Welcome to </span>
              <span className="blue-text header h1 span">The Kilogram ✨</span>
            </h1>
            <h6>SINCE: 2022</h6>
          </section>
         
          <h2 className="white-text">Your favorite restaurant for delicious meals!</h2>
        </div>
      </header>

      <section id="about" className="about" data-aos="fade-up">
        <h2 className="blue-text">About Us</h2>
        <h3 className="yellow-text">Welcome to The Kilogram — Where Every Meal is a Celebration!</h3>
        <p>
          At The Kilogram, we believe that food is more than just nourishment; it's an experience meant to be shared. With our unique concept of serving Bhaji Pav and Pulao by the kilo, we redefine the joy of communal dining. Imagine the aroma of perfectly spiced Bhaji Pav and the flavorful, fragrant Pulao — not just for one, but served generously for all to enjoy!
        </p>
        <h3 className="yellow-text">Why Choose The Kilogram?</h3>
        <p>
          A Taste of Togetherness: Food is best enjoyed when shared, and our kilo servings make sure there's always enough for everyone.
          Authentic Flavors: We stay true to the roots of traditional recipes while adding a modern twist to excite your taste buds.
          Quality You Can Trust: From handpicked vegetables to carefully sourced spices, we prioritize quality to deliver freshness in every bite.
          Happiness by the Kilo: Because a kilo of love is better than a pinch of compromise.
          At The Kilogram, every meal is a festival, every bite a celebration, and every gathering a cherished memory. So, gather your loved ones, indulge in the comfort of food that feels like home, and create memories that last a lifetime.
          Taste the Love, Share the Joy — Only at The Kilogram!
        </p>

        <div className="owner-details">
          <h3 className="yellow-text">Meet the Owners</h3>
          <div className="owners-info">
            <div className="owner">
              <img src={user1} alt="Owner 1's Name" className="owner-photo" />
              <p className="owner-name">Mihir Maheta (Founder)</p>
            </div>
            <div className="owner-description">
              <p>
                Hello! We are [Mihir & Dev], the proud owners of The Kilogram. With over [3 years] of combined experience in the culinary world, our passion for food and community drives everything we do here. We believe that every meal should be a celebration, and we strive to create an environment where everyone feels welcome and cherished.
              </p>
              <p>
                Our journey began with a love for traditional recipes passed down through generations. We wanted to share these flavors with the world while also embracing modern culinary trends. At The Kilogram, we focus on quality ingredients and authentic flavors, ensuring that every dish tells a story.
              </p>
              <p>
                Our mindset is simple: food is a universal language that brings people together. We invite you to join us at The Kilogram, where every meal is crafted with love and every gathering is a chance to create lasting memories.
              </p>
            </div>
            <div className="owner">
              <img src={user2} alt="Owner 2's Name" className="owner-photo" />
              <p className="owner-name">Dev Maheta (Co Founder)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu" data-aos="fade-up">
        <h2 className="blue-text">Menu Photos</h2>
        <div className="menu-photos">
          <img src={menu1} alt="Menu Item 1" />
          <img src={menu2} alt="Menu Item 2" />
        </div>
      </section>

      <section id="special-dishes" className="special-dishes" data-aos="fade-up">
  <SpecialDishesSlider />
</section>
      <section id="reviews" className="reviews" data-aos="fade-up">
        <h2 className="blue-text">Customer Ratings</h2>
        <div className="review-container">
          <div className="review">
            <img src={googleIcon} alt="Google" className="review-icon" />
            <h2 className="blue-text">Google - </h2>
            <h2 className="star-text">4.5/5 - <span className="stars">★★★★☆</span></h2>
          </div>
          <div className="review">
            <img src={swiggyIcon} alt="Swiggy" className="review-icon" />
            <h2 className="blue-text">Swiggy - </h2>
            <h2 className="star-text">4.2/5 - <span className="stars">★★★★☆</span></h2>
          </div>
          <div className="review">
            <img src={zomatoIcon} alt="Zomato" className="review-icon" />
            <h2 className="blue-text">Zomato - </h2>
            <h2 className="star-text">4.3/5 - <span className="stars">★★★★☆</span></h2>
          </div>
        </div>
      </section>

      <ReviewsSlider />

      <section id="contact" className="contact-map-container" data-aos="fade-up">
        <div className="map">
          <div>
            <h2 className="colorful-text">Contact Us</h2>
            <p className="contact-info">
              <img src={addressIcon} alt="Address" className="contact-icon" />
              <strong>Address:--</strong> 15, Shayona Shikhar Complex, Vandemataram-Gota, Ahmedabad, 382481
            </p>
            <p className="contact-info">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <strong>Phone:--</strong> 9099933459
            </p>
            <p className="contact-info">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <strong>Email:--</strong> mahetamihir7300@gmail.com
            </p>
            <p className="contact-info">
              <img src={instagram} alt="Instagram" className="contact-iconstyle" />
              <strong>Instagram:--</strong> thekilogram2022
            </p>
          </div>
          <div>
            <h2 className="colorful-text">Find Us Here</h2>
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8252320286375!2d72.5452169!3d23.0969526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e838 8f7f4d947%3A0xf4cac3c2e7047cc8!2sThe%20Kilogram!5e0!3m2!1sen!2sin!4vYOUR_UNIQUE_ID"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;