import PropTypes from "prop-types";
import { Button } from "@mui/material";
import style from "./button.module.scss";

const CustomButton = (props) => {
  const { buttonText, handleClick, type, disabled } = props;

  return (
    <Button
      disabled={disabled}
      variant="contained"
      className={style.button}
      type={type}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  );
};

CustomButton.defaultProps = {
  buttonText: "No text",
  handleClick: () => {},
  type: "button",
  disabled: false,
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default CustomButton;
