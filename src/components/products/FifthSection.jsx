import React from 'react'
import "./FifthSection.css"

const FifthSection = () => {
    return (
       
            <section className="fifth-section">
                <h1>Infoziant DAST Pro and Free Versions </h1>
                <div class="comparison-table">
                    <div class="comparison-column">
                        <h2><i class="fas fa-gift free-icon"></i>Free</h2>
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
    )
}

export default FifthSection;