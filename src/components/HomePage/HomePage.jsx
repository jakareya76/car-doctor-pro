import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default HomePage;
