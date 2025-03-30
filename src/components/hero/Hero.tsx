import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img
          src="https://source.unsplash.com/random/1600x900"
          alt="Hero"
          className="hero-image"
        />
      </section>
    </>
  );
};
export default Hero;
