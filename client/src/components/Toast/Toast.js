import { useEffect } from "react";

import "./style.css";

const Toast = ({ errorList, removeItem }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (errorList.length !== 0) {
        removeItem(0);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [errorList]);

  return (
    <div className={`error-wrapper ${errorList.length === 0 && "remove"}`}>
      {errorList.map((error, index) => {
        return (
          <div
            className="error-container"
            onClick={() => {
              removeItem(index);
            }}
          >
            {error.error_msg}
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
