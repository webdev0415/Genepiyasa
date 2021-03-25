import React from "react";

const ArrowButton = ({
  style,
  rightArrow,
  leftArrow,
  stroke = "#0BCE91",
  ...props
}) => {
  if (rightArrow) {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer", ...style }}
        {...props}
      >
        <path
          d="M25 13C25 19.628 19.628 25 13 25C6.372 25 1 19.628 0.999999 13C0.999999 6.372 6.372 0.999999 13 0.999999C19.628 0.999998 25 6.372 25 13Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13L17 13"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.6665 16.3335L16.9998 13.0002L13.6665 9.66683"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (leftArrow) {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer", ...style }}
        {...props}
      >
        <path
          d="M1 13C1 19.628 6.372 25 13 25C19.628 25 25 19.628 25 13C25 6.372 19.628 0.999999 13 0.999999C6.372 0.999998 1 6.372 1 13Z"
          stroke="#0BCE91"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 13L9 13"
          stroke="#0BCE91"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3335 16.3335L9.00016 13.0002L12.3335 9.66683"
          stroke="#0BCE91"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return null;
};

export default ArrowButton;
