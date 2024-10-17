import React, { useEffect, useState } from 'react';
import './Product.css';
import productImage from '../../assests/images/info-img-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faShieldAlt, faBug, faCloud, faClipboard, faSyncAlt, faFileAlt, faClock, faServer, faCog, faKey, faCogs, faLock, faTerminal } from '@fortawesome/free-solid-svg-icons';


const Product = () => {

    // Use useEffect to run the IntersectionObserver once the component is mounted
    useEffect(() => {
        const firstSection = document.querySelector('.first-section');
        const secondSection = document.querySelector('.second-section');
        const thirdSection = document.querySelector('.third-section');
        const fourthSection = document.querySelector('.fourth-section');
        const fifthSection = document.querySelector('.fifth-section');
        const sixthSection = document.querySelector('.sixth-section');

        // Create an intersection observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view'); // Add the 'in-view' class when the section is in the viewport
                    observer.unobserve(entry.target); // Stop observing once in view to prevent repeated triggers
                }
            });
        }, { threshold: 0.1 }); // Trigger when at least 10% of the section is visible

        // Observe each section
        observer.observe(firstSection);
        observer.observe(secondSection);
        observer.observe(thirdSection);
        observer.observe(fourthSection);
        observer.observe(fifthSection);
        observer.observe(sixthSection);

        return () => {
            // Cleanup observer on component unmount
            if (firstSection) observer.unobserve(firstSection);
            if (secondSection) observer.unobserve(secondSection);
            if (thirdSection) observer.unobserve(thirdSection);
            if (fourthSection) observer.unobserve(fourthSection);
            if (fifthSection) observer.unobserve(fifthSection);
            if (sixthSection) observer.unobserve(sixthSection);
        };
    }, []);
    const [flippedStates, setFlippedStates] = useState(new Array(14).fill(false));

    const cards = [
        { title: "Comprehensive Vulnerability Detection", icon: faShieldAlt, backDescription: "Identify over 17,000+ vulnerabilities across Web 2.0, Web 3.0, LLMs and cloud environments." },
        { title: "2,500+ Critical CVEs Integrated", icon: faBug, backDescription: "Includes vulnerabilities from 2000 to 2024, ensuring both legacy and current threats are addressed." },
        { title: "Advanced Cloud Security Evaluations", icon: faCloud, backDescription: "Comprehensive security assessments for major cloud platforms such as AWS, Google Cloud, Azure, IBM Cloud and Oracle Cloud." },
        { title: "Adherence to Multiple Standards", icon: faClipboard, backDescription: "Supports compliance with a wide range of global standards including HIPAA, GDPR, CCPA, PCI-DSS, NIST, and more." },
        { title: "Unlimited Automated Scans", icon: faSyncAlt, backDescription: "Optimize your database security with powerful protection tools." },
        { title: "Continuous Monitoring and Updates", icon: faFileAlt, backDescription: "Always stay updated with automatic database updates and continuous monitoring of vulnerabilities." },
        { title: "Customizable Reporting", icon: faFileAlt, backDescription: "Generate detailed reports supporting frameworks like OWASP 2021, OWASP API 2019, and PCI-DSS." },
        { title: "24/7 Managed Support", icon: faClock, backDescription: "Receive around-the-clock expert consultation and technical support." },
        { title: "Business Logic Security Testing", icon: faServer, backDescription: "Specialized security tests to protect critical business logic processes from threats." },
        { title: "Available for Windows and Linux", icon: faCog, backDescription: "Access the tool on both Windows and Linux operating systems." },
        { title: "Concurrent & Queue-Based Scanning", icon: faCogs, backDescription: "Perform simultaneous scans and manage scan priorities with queue-based functionality." },
        { title: "Scheduled Scanning", icon: faClock, backDescription: "Automate your scans with a scheduler, ensuring regular testing of your applications." },
        { title: "Scan Behind Authentication Pages", icon: faKey, backDescription: "Test security behind login pages with support for scanning authenticated pages, ensuring no part of your application is left unchecked." },
        { title: "Command Line Scanning", icon: faTerminal, backDescription: "Run command-line-based scans, allowing flexibility for developers and automation tools." },
        { title: "Scanning Authentication Pages", icon: faLock, backDescription: "Test security behind login pages, ensuring no part of your application is left unchecked." }
    ];


    const toggleFlip = (index) => {
        const newFlippedStates = [...flippedStates];
        newFlippedStates[index] = !newFlippedStates[index];
        setFlippedStates(newFlippedStates);
    };

    return (
        <>
            <div className="product-page">
                <section className="section first-section">
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

                {/* <section className="section first-section">
  <h1>Infoziant DAST: Elevating Web Application Security</h1>
  <div className="contain">
    <div className="text">
      <p className="desc">
        Infoziant’s DAST scanner helps secure web applications by detecting vulnerabilities in real time. Using advanced technology, it provides comprehensive security checks through both automated and manual testing, ensuring your web assets stay protected from evolving threats.
      </p>
      <p className="scanners">
        Key Features:
        <ul>
          <li>Real-time vulnerability detection.</li>
          <li>Automated and manual security testing.</li>
          <li>Resilience against cyber threats.</li>
          <li>Quick identification and fixing of vulnerabilities.</li>
        </ul>
      </p>
    </div>
    <div className="product-image-container">
      <img src={productImage} alt="Infoziant Shield" className="product-image shake-effect" />
    </div>
  </div>
</section> */}


                <section className="section second-section">
                    <h1>Infoziant DAST Features</h1>
                    <div className="wrapper">
                        <div className="cols">
                            {cards.map((card, index) => (
                                <div className="col" key={index} onClick={() => toggleFlip(index)}>
                                    <div className={`container ${flippedStates[index] ? "flipped" : ""}`}>
                                        <div className="front">
                                            <div className="inner">
                                                <FontAwesomeIcon icon={card.icon} size="2x" />
                                                <p>{card.title}</p>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <p>{card.backDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="section third-section">
                    <h1>Differences Between Infoziant DAST Pro and Free Versions</h1>
                </section>

                <section class="section fourth-section">
                    <h1>Infoziant’s free version has garnered over 70,000 downloads worldwide.</h1>
                    <div class="download-container">
                        <div>
                            <div class="download-box">
                                <h2>Windows</h2>
                                <div class="download-info">
                                    <span>Size (176 MB)</span>
                                    <span>Current Version (1.0.0)</span>
                                    <button class="download-button">Download</button>
                                </div>
                            </div>
                        </div>
                        <div class="requirements-box">
                            <h2>System Requirements</h2>
                            <ul>
                                <li ><b className='bb'>Operating Systems:</b>
                                    <ul>
                                        <li>Windows (64bit)</li>
                                        <li>Linux all distribution (64bit)</li>
                                    </ul>
                                    <p>Note: Linux version is only available with the Pro plan.</p>
                                </li>
                                <li><b className='bb'>RAM Requirements:</b>
                                    <ul>
                                        <li>Minimum 4GB of RAM for scanning simple websites.</li>
                                        <li>16GB of RAM is necessary for scanning medium-sized websites.</li>
                                        <li>For larger websites, 32GB of RAM is required.</li>
                                    </ul>
                                </li>
                                <li><b className='bb'>Storage: 10GB of available disk space</b></li>
                            </ul>
                        </div>
                    </div>
                </section>



                <section className="section fifth-section">

                    <h1>Infoziant DAST Pro and Free Versions </h1>

                    <div class="comparison-table">




                        <div class="comparison-column">
                            <h2><i class="fas fa-gift free-icon"></i> FREE</h2>
                            <ul>
                                <li><span class="checkmark">✔</span>Basic Vulnerability Detection</li>
                                <li><span class="checkmark">✔</span> Top 500 CVEs</li>
                                <li><span class="checkmark">✔</span> Basic Cloud Security</li>
                                <li><span class="checkmark">✔</span>3 scans limit</li>
                                <li><span class="checkmark">✔</span> OWASP, SANS</li>
                                <li><span class="checkmark">✔</span> Windows Only</li>
                                <li><span class="crossmark">✘</span> Business Logic Testing</li>
                                <li><span class="crossmark">✘</span> 24/7 Support</li>
                            </ul>
                        </div>

                        {/* <!-- Premium Version Column --> */}
                        <div class="comparison-column">
                            <h2><i class="fas fa-crown premium-icon"></i> PREMIUM</h2>
                            <ul>
                                <li><span class="checkmark">✔</span> Comprehensive (17,000+)</li>
                                <li><span class="checkmark">✔</span>2,500+ CVEs</li>
                                <li><span class="checkmark">✔</span> No advertisements</li>
                                <li><span class="checkmark">✔</span>Unlimited</li>
                                <li><span class="checkmark">✔</span> OWASP, SANS, HIPAA, GDPR, etc</li>
                                <li><span class="checkmark">✔</span>Windows & Linux</li>
                                <li><span class="checkmark">✔</span>Business Logic Testing</li>
                                <li><span class="checkmark">✔</span> 24/7 Support</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="section sixth-section">

                    <h1>Demo</h1>
                </section>
            </div>
        </>
    );
};

export default Product;
