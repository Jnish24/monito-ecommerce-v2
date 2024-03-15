import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeAnimals from "../components/HomeAnimals";

function Home() {
  return (
    <>
      <Hero />
      <HomeAnimals
        smallHeader="What's new?"
        header="Take A Look At Some Of Our Pets"
      />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
