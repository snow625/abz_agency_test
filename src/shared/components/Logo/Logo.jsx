import SvgIcon from "components/SvgIcon";
import s from "./logo.module.scss";
const Logo = () => {
  return (
    <a
      className={s.logo}
      href="/"
      rel="noreferrer"
      aria-label="link to home page"
    >
      <SvgIcon className={s.logo__icon} iconName="logo" />
    </a>
  );
};

export default Logo;
