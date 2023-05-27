import s from "./hero.module.scss";
import Button from "components/Button"

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.inner_wrapper}>
        <h1  className={s.inner_wrapper__title} >Test assignment for front-end developer</h1>
        <p className={s.inner_wrapper__text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button buttonText='Sign up' />

        </div>
        
      </div>
    </section>
  );
};

export default Hero;
