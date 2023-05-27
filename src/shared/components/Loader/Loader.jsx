import { createPortal } from "react-dom";
import s from "./loader.module.scss";

import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { useEffect } from "react";

useEffect;

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
            color: () => "#00BDD3",
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
