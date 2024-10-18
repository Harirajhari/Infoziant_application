import React from 'react';
import './FifthSection.css';

const FifthSection = () => {
  return (
    <section className="fifth-section">
      <h1>Infoziant DAST Pro and Free Versions</h1>
      <div className="comparison-table">
        {/* Free Version Column */}
        <div className="comparison-column free">
          <h2><i className="fas fa-gift free-icon"></i>Free</h2>
          <ul>
            <li><span className="checkmark">✔</span>Basic Vulnerability Detection</li>
            <li><span className="checkmark">✔</span>Top 500 CVEs</li>
            <li><span className="checkmark">✔</span>Basic Cloud Security</li>
            <li><span className="checkmark">✔</span>3 scans limit</li>
            <li><span className="checkmark">✔</span>OWASP, SANS</li>
            <li><span className="checkmark">✔</span>Windows Only</li>
            <li><span className="crossmark">✘</span>Business Logic Testing</li>
            <li><span className="crossmark">✘</span>24/7 Support</li>
          </ul>
        </div>

        {/* Premium Version Column */}
        <div className="comparison-column premium">
          <h2><i className="fas fa-crown premium-icon"></i> PREMIUM</h2>
          <ul>
            <li><span className="checkmark">✔</span>Comprehensive (17,000+)</li>
            <li><span className="checkmark">✔</span>2,500+ CVEs</li>
            <li><span className="checkmark">✔</span>No advertisements</li>
            <li><span className="checkmark">✔</span>Unlimited Scans</li>
            <li><span className="checkmark">✔</span>OWASP, HIPAA, GDPR</li>
            <li><span className="checkmark">✔</span>Windows & Linux</li>
            <li><span className="checkmark">✔</span>Business Logic Testing</li>
            <li><span className="checkmark">✔</span>24/7 Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
