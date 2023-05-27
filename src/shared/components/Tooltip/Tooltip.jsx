import PropTypes from "prop-types";

import s from "./tooltip.module.scss";

import { styled } from "@mui/material/styles";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Fragment } from "react";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(0, 0, 0, 0.87);",
    color: "rgb(255, 255, 255)",
    fontSize: "16px",
    borderRadius: "4px",
    maxWidth: 400,
  },
}));

const CustomTooltip = (props) => {
  const { children, title, toUpperCase } = props;
  return (
    <LightTooltip
      disableFocusListener
      disableTouchListener
      enterDelay={500}
      leaveDelay={200}
      title={
        <Fragment>
          {toUpperCase ? (
            <p className={`${s.title} firstUpperCase`}>{title}</p>
          ) : (
            <p className={s.title}>{title}</p>
          )}
        </Fragment>
      }
    >
      {children}
    </LightTooltip>
  );
};
CustomTooltip.defaultProps = {
  toUpperCase: false,
};

CustomTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  toUpperCase: PropTypes.bool,
};

export default CustomTooltip;
