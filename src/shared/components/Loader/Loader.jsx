import { createPortal } from "react-dom";
import { useEffect } from "react";

import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

import s from "./loader.module.scss";

const loaderRoot = document.getElementById("loader-root");

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return createPortal(
    <div className={s.overlay}>
      <div className={s.loader}>
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            animationDuration: "1200ms",
            borderRadius: "8px",
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={48}
          thickness={4}
        />
      </div>
    </div>,
    loaderRoot
  );
};
export default Loader;
