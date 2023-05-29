import PropTypes from "prop-types";

import InputMask from "react-input-mask";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import Button from "components/Button";
import InputFile from "components/InputFile";

import { fields, initialState } from "./initFormData";
import { useForm } from "hooks";

import s from "./form.module.scss";

const Form = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const checkValue = () => {
    return !Object.values(state).every((value) => value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField onChange={handleChange} value={state.name} {...fields.name} />
      <TextField
        onChange={handleChange}
        value={state.email}
        {...fields.email}
      />

      <InputMask
        mask={fields.phone.mask}
        value={state.phone}
        onChange={handleChange}
      >
        {() => <TextField {...fields.phone} />}
      </InputMask>

      <div className={s.radio}>
        <FormControl>
          <FormLabel id="Your work position">
            <span className={s.radio__label}>Select your position</span>
          </FormLabel>
          <RadioGroup
            aria-labelledby="Your work position"
            name="position_id"
            value={state.position_id}
            onChange={handleChange}
          >
            {fields.position_id.positions.map((el) => {
              const { id, name } = el;
              return (
                <FormControlLabel
                  key={id}
                  value={id}
                  control={<Radio />}
                  label={name}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>

      <InputFile
        onChange={handleChange}
        {...fields.photo}
        label={state.photo?.name ? state.photo?.name : fields.photo.label}
      />

      <Button disabled={checkValue()} buttonText="Sign up" type="submit" />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
