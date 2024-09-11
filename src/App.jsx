import React from 'react';
import './App.css'

function App() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="abstract-logo">Abstract</span> | Help Center
        </div>
        
        <div className="actions">
          <button className="btn">Submit a request</button>
          <button className="btn primary">Sign in</button>
        </div>
      </header>

      {/* Main Section */}
      <main>
        <div className='up'>
        <h1 className="title">How can we help?</h1>
        <input className="search-bar" type="text" placeholder="Search" />
        </div>

        <div className="help-sections">
          <div className="section">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D4GACXWCRKK6JHQ730XD" alt="Branches" />
            <h2>Branches</h2>
            <p>Abstract Branches lets you manage, version, and document your designs in one place.</p>
            <a href="#">Learn More →</a>
          </div>


          <div className="section">
            <img src="	https://help.abstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878" alt="Manage your account" />
            <h2>Manage your account</h2>
            <p>Configure your account settings, such as your email, profile details, and password.</p>
            <a href="#">Learn More →</a>
          </div>


          <div className="section">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D3M8CRR0C2V5GREVR6HK" alt="Manage organizations" />
            <h2>Manage organizations, teams, and projects</h2>
            <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
            <a href="#">Learn More →</a>
          </div>


          <div className="section">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D38K1S1M9WKWSQZE62YE" alt="Manage billing" />
            <h2>Manage billing</h2>
            <p>Change subscriptions and payment details.</p>
            <a href="#">Learn More →</a>
          </div>


          <div className="section">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D3S3QY5190TZE3H8ZSVK" alt="Authenticate to Abstract" />
            <h2>Authenticate to Abstract</h2>
            <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
            <a href="#">Learn More →</a>
          </div>


          <div className="section">
            <img src="	https://help.abstract.com/hc/theming_assets/01HZH4D3G4S2K93BN3WJPT8600" alt="Abstract support" />
            <h2>Abstract support</h2>
            <p>Get in touch with a human.</p>
            <a href="#">Learn More →</a>
          </div>
        </div>
      </main>



      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>Abstract</h3>
          <a href="#">Branches</a>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <a href="#">Blog</a>
          <a href="#">Help Center</a>
          <a href="#">Release Notes</a>
          <a href="#">Status</a>
        </div>
        
        <div className="footer-section">
          <h3>Community</h3>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Dribbble</a>
          <a href="#">Podcast</a>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Legal</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="copyright">
          <div className="instagram-icon" />
            <p>© Copyright 2022</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>  

      </footer>
    </div>
  );
}

export default App

