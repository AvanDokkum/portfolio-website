import "./AppTemplate.css";

import React from "react";

const ResponsiveLayout: React.FC = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>h1 title loooooooong</h1>
      </header>

      {/* Main Content (Hero + Features) */}
      <main className="grid-container">
        {/* Hero Section */}
        <section className="hero">
          <h2>Welcome</h2>
          <p>Resize the window to see how everything adapts.</p>
          <img
            src="https://source.unsplash.com/random/1600x900"
            alt="Hero"
            className="hero-image"
          />
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">Feature 1</div>
          <div className="feature-card">Feature 2</div>
          <div className="feature-card">Feature 3</div>
          <div className="feature-card">Feature 3</div>
          <div className="feature-card">Feature 3</div>
          <div className="feature-card">Feature 3</div>
          <div className="feature-card">Feature 3</div>
          <div className="feature-card">Feature 3</div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
};

export default ResponsiveLayout;
