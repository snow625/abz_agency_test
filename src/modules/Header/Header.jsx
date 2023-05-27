import Button from "components/Button";
import s from "./header.module.scss";
import Logo from "components/Logo";
const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Logo />
        <div className={s.button_wrapper}>
          <Button buttonText="Users" />
          <Button buttonText="Sign up" />
        </div>
      </div>
    </header>
  );
};

export default Header;
