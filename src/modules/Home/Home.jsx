import Header from "modules/Header";
import Hero from "./Hero";
import CardsSection from "./CardsSection";

import s from "./home.module.scss"

const Home = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Hero />
        <CardsSection/>
      </main>
    </>
  );
};

export default Home;
