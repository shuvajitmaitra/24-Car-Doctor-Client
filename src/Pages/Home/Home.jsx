import About from "./About";
import Banner from "./Banner";
import Feature from "./Feature";
import Products from "./Products";
import Reviews from "./Reviews";
import Services from "./Services";
import Location from "./location";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Location></Location>
      <Products></Products>
      <Feature></Feature>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
