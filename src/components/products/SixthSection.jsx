import React from 'react'
import "./SixthSection.css"

const SixthSection = () => {
  return (
        <section className="section sixth-section">
          <h1>Infoziant’s free version has garnered over 70,000 downloads worldwide.</h1>
          <div className="download-container">
            <div className="download-box">
              <div className="windows-icon">
                <i className="fab fa-windows"></i> {/* Windows icon */}
              </div>
              <h2>Windows</h2>
              <div className="download-info">
                <span><i className="fas fa-file-download"></i> Size (176 MB)</span>
                <span><i className="fas fa-code-branch"></i> Current Version (1.0.0)</span>
                <button className="download-button">
                  <i className="fas fa-download"></i> Download {/* Download icon */}
                </button>
              </div>
            </div>

            <div className="requirements-box">
              <h2><i className="fas fa-tools"></i> System Requirements</h2>
              <ul>
                <li><b className='bb'>Operating Systems:</b>
                  <ul>
                    <li><i className="fab fa-windows"></i> Windows (64bit)</li>
                    <li><i className="fab fa-linux"></i> Linux all distribution (64bit)</li>
                  </ul>
                  <p>Note: Linux version is only available with the Pro plan.</p>
                </li>
                <li><b className='bb'>RAM Requirements:</b>
                  <ul>
                    <li><i className="fas fa-memory"></i> Minimum 4GB for scanning simple websites.</li>
                    <li><i className="fas fa-memory"></i> 16GB for medium-sized websites.</li>
                    <li><i className="fas fa-memory"></i> 32GB for larger websites.</li>
                  </ul>
                </li>
                <li><b className='bb'><i className="fas fa-hdd"></i> Storage:</b> 10GB of available disk space</li>
              </ul>
            </div>
          </div>
        </section>
  )
}

export default SixthSection;