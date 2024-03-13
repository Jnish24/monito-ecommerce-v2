import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeAnimals from "../components/HomeAnimals";
import HomeProducts from "../components/HomeProducts";

function Home() {
  return (
    <>
      <Hero />
      <HomeAnimals />
      <Banner />
      <HomeProducts />
      <Footer />
    </>
  );
}

export default Home;
