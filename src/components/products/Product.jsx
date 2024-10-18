import React, {  useState } from 'react';
import './Product.css';
import productImage from '../../assests/images/info-img-1.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import videoimage from "../../assests/images/videoimg.png"
import ThirdSection from "./CardSlider";
import FifthSection from "./FifthSection";
import SixthSection from './SixthSection';


const Product = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <>
      <div className="product-page">
        <section className="first-section">
          <h1>Infoziant DAST: Elevating Your Web Application Security</h1>
          <div className='contain'>
            <div className='text'>
              <p className='desc'>
                Infoziant’s Dynamic Application Security Testing (DAST) Scanner is
                designed to help organizations safeguard their web applications by
                identifying vulnerabilities in real time. Built with cutting-edge
                technology, this tool provides comprehensive security evaluations
                through automated and manual testing, ensuring your web assets remain
                resilient against evolving cyber threats.
              </p>
              <p className='scanners'>
                Infoziant DAST includes two specialized vulnerability scanners
                <ul>
                  <li>Safeguard web applications with real-time vulnerability detection.</li>
                  <li>Leverages advanced automated and manual testing for thorough security checks.</li>
                  <li>Ensures resilience against evolving cyber threats.</li>
                  <li>Identify and fix vulnerabilities before attackers can exploit them.</li>
                  <li>Combines the best of both worlds for a robust security evaluation.</li>
                </ul>
              </p>
            </div>
            <div className="product-image-container">
              <img src={productImage} alt="Infoziant Shield" className="product-image shake-effect" />
            </div>
          </div>
        </section>
        <section className="second-section">
          <h1>Infoziant DAST Tool</h1>
          <div className="you-tube-video">
            <div className="video-thumbnail" onClick={handlePlayVideo}>
              <img
                src={videoimage}
                alt="Infoziant DAST Tool"
                className="thumbnail-image"
              />
              <button className="play-button">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="url(#grad1)" style={{ stroke: 'none' }} />
                  <polygon points="40,30 70,50 40,70" fill="white" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#15F5BA', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#0066ff', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          {isVideoPlaying && (
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/xK-QUTobeeg?autoplay=1"
                title="Infoziant DAST Tool"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="close-button" onClick={handleCloseVideo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#15F5BA', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#0066ff', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <text x="12" y="12" fontSize="24" fontWeight="bolder" fill="url(#grad1)" textAnchor="middle" alignmentBaseline="middle">✕</text>
                </svg>
              </button>

            </div>
          )}
        </section>
        <ThirdSection />
        <FifthSection/>
        <SixthSection/>
      </div>
    </>
  );
};

export default Product;
