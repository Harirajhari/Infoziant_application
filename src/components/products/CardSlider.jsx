import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./CardSlider.scss"
import img1 from "../../assests/productimages/img1.png";
import img2 from "../../assests/productimages/img2.png";
import img3 from "../../assests/productimages/img3.png";
import img4 from "../../assests/productimages/img4.png";
import img5 from "../../assests/productimages/img5.png";
import img6 from "../../assests/productimages/img6.png";
import img7 from "../../assests/productimages/img7.png";
import img8 from "../../assests/productimages/img8.png";
import img9 from "../../assests/productimages/img9.png";

const cardsData = [
    { image: img1, text: 'Real-time Vulnerability Detection' },
    { image: img2, text: 'Interactive Testing' },
    { image: img3, text: 'Runtime Issue Detection' },
    { image: img4, text: 'Comprehensive Vulnerability Reporting' },
    { image: img5, text: 'Modular and Customizable Scanning' },
    { image: img6, text: 'OWASP Top 10 and Industry-standard Coverage' },
    { image: img7, text: 'Automation and Scheduling' },
    { image: img8, text: 'API Security Testing' },
    { image: img9, text: 'Remediation Recommendations' },
];

const CardSlider = () => {
    // Slider settings for customization
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,  // Show 3 cards at once, you can change it
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  // Auto-scroll speed
        nextArrow: <SampleNextArrow />, // Custom arrow components
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="slider-section">
            <h1>Infozint DAST Features</h1>
            <Slider {...settings}>
                {cardsData.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.image} alt={card.text} className="card-image" />
                        <p className="card-text">{card.text}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

// Custom Next Arrow
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

// Custom Prev Arrow
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

export default CardSlider;
