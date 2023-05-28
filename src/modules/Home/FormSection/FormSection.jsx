import PropTypes from "prop-types";
import s from "./formSection.module.scss";
import SvgIcon from "components/SvgIcon";
import Form from "./Form/Form";

const FormSection = (props) => {
  const { onSubmit, isRegister } = props;
  return (
    <section>
      <div className={`container ${s.wrapper}`} name="formID">
        <h2 className={s.wrapper__title}>
          {isRegister
            ? "User successfully registered"
            : "Working with POST request"}
        </h2>
        {isRegister ? (
          <SvgIcon iconName="formOk" className={s.fromIcon} />
        ) : (
          <Form onSubmit={onSubmit} />
        )}
      </div>
    </section>
  );
};

FormSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isRegister: PropTypes.bool.isRequired,
};

export default FormSection;
