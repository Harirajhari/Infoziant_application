import React, { useState } from 'react';
import "./SixthSection.css";
import windowImage from '../../assests/images/productimages/window.png'; // Ensure this path is correct
import shapeImage from '../../assests/images/chooseus_shape.png'; // Ensure this path is correct

const SixthSection = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('systemRequirements'); // Default to system requirements

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="chooseus_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
            <div className="chooseus_content">
              <h3>Infoziant’s free version has garnered over 70,000 downloads worldwide.</h3>
              <div className="tabs-box tabs-options mb-0">
                <ul className="nav nav-tabs">
                  <li>
                    <a
                      className={activeTab === 'systemRequirements' ? 'active' : ''}
                      onClick={() => handleTabClick('systemRequirements')}
                    >
                      System Requirements
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeTab === 'windows' ? 'active' : ''}
                      onClick={() => handleTabClick('windows')}
                    >
                      Windows
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeTab === 'linux' ? 'active' : ''}
                      onClick={() => handleTabClick('linux')}
                    >
                      Linux
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  {activeTab === 'systemRequirements' && (
                    <div className="tab-pane fade in active show">
                      <div className="chooseus_content_wrapper">
                        <h4>RAM Requirements</h4>
                        <ul>
                          <li>Minimum 4GB of RAM for scanning simple websites.</li>
                          <li>16GB of RAM is necessary for scanning medium-sized websites.</li>
                          <li>For larger websites, 32GB of RAM is required.</li>
                        </ul>
                        <p>Note: Linux version is only available with the Pro plan.</p>
                        <p>Storage: 10GB of available disk space</p>
                        <div className="choose_list">
                          <h4>Operating Systems:</h4>
                          <ul className="list-unstyled mb-0 second_list">
                            <li>
                              <i className="fa-solid fa-check"></i>
                              <p className="text-size-16">Windows (64bit)</p>
                            </li>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              <p className="text-size-16">Linux all distribution (64bit)</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'windows' && (
                    <div className="tab-pane fade in active show">
                      <div className="chooseus_content_wrapper">
                        <h4>Windows (64bit)</h4>
                        <div className="choose_list">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <i className="fa-solid fa-check"></i>
                              <p className="text-size-16">Size (176 MB)</p>
                            </li>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              <p className="text-size-16">Current Version (1.0.0)</p>
                            </li>
                          </ul>
                        </div>
                        <div className="btn_wrapper">
                          <a className="text-decoration-none default-btn hover-effect"
                            href="email.html">Download</a>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'linux' && (
                    <div className="tab-pane fade in active show">
                      <div className="chooseus_content_wrapper">
                        <h4>Linux all distribution (64bit)</h4>
                        <div className="choose_list">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <i className="fa-solid fa-check"></i>
                              <p className="text-size-16">Size (178 MB)</p>
                            </li>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              <p className="text-size-16">Current Version (1.0.0)</p>
                            </li>
                          </ul>
                        </div>
                        <div className="btn_wrapper">
                          <a className="text-decoration-none default-btn hover-effect"
                            href="email.html">Download</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 col-12 d-lg-flex align-items-center d-block text-md-left text-center order-lg-2 order-1">
            <div className="chooseus_image_wrapper position-relative">
              <figure className="chooseus_image mb-0 position-relative">
                <img src={windowImage} alt="" className="img-fluid" />
              </figure>
              <figure className="chooseus_shape mb-0 position-absolute">
                <img src={shapeImage} alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
