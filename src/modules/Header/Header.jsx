import Button from "components/Button";
import s from "./header.module.scss";
import Logo from "components/Logo";

import {scroller} from "react-scroll";

const Header = () => {
 
  
  const onScroll = (name) => {
    scroller.scrollTo(name, {
      duration: 500,
      delay: 100,
      smooth: true,
    });
  
  };
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Logo />
        <div className={s.button_wrapper}>
          <Button buttonText="Users" handleClick={() => onScroll("users")} />
          <Button
            buttonText="Sign up"
            handleClick={() => onScroll("formID")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
