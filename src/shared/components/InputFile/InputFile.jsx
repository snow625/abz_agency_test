import PropTypes from "prop-types";

import s from "./inputFile.module.scss";

// import FormControlLabel from "@mui/material/FormControlLabel";

const InputFile = (props) => {
  const { handleChange, label, ...args } = props;

  return (
    <label className={s.label}>
      <div className={s.label__box}>
        <div className={s.label__box_left}>
          <p>Upload</p>
        </div>
        <div className={s.label__box_rigth}>
          <p>{label.length > 30 ? label.slice(0, 30) + "..." : label}</p>
        </div>
      </div>
      <input onChange={handleChange} {...args} />
    </label>
  );
};
InputFile.defaultProps = {
  handleChange: () => {},
};

InputFile.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
};

export default InputFile;
