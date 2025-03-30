import "./Features.css";

const Features: React.FC = () => {
  return (
    <>
      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="feature-card">Feature 2</div>
        <div className="feature-card">Feature 3</div>
        <div className="feature-card">Feature 3</div>
        <div className="feature-card">Feature 3</div>
        <div className="feature-card">Feature 3</div>
        <div className="feature-card">Feature 3</div>
        <div className="feature-card">Feature 3</div>
      </section>
    </>
  );
};
export default Features;
