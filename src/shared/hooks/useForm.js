import { useState } from "react";
import PropTypes from "prop-types";

const useForm = ({ onSubmit, initialState, isReset }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { id, name, value, type, checked } = target;
    if (target?.files?.length) {
      setState((prevState) => ({
        ...prevState,
        [id]: target.files[0],
      }));
      return
    }
    
   
    const newValue = type === "checkbox" ? checked : value;
    setState((prevState) => ({
      ...prevState,
      [name ? name : id]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    if (isReset) {
      setState({ ...initialState });
    }
  };

  return { state, setState, handleChange, handleSubmit };
};

useForm.defaultProps = {
  onSubmit: () => {},
  initialState: {},
  isReset: true,
};

useForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.shape.isRequired,
  isReset: PropTypes.bool.isRequired,
};

export default useForm;
