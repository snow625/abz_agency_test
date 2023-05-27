import PropTypes from "prop-types";
import sprite from "@/assets/svg/sprite.svg";

const SvgIcon = (props) => {
  const { className, iconName } = props;

  return (
    <svg className={`${className}`}>
      <use href={sprite + `#${iconName}`}></use>
    </svg>
  );
};

SvgIcon.defaultProps = {
  className: "",
};

SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SvgIcon;
