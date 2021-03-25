import React from "react";
import styled from "styled-components";

const InputIcon = ({ icon, valid, error }) => {
  const Path = styled.path`
    stroke: ${({ theme }) => {
      if (valid) {
        return "#0BCE91";
      } else if (error) {
        return "#DF585A";
      } else {
        return theme.inputIconColor;
      }
    }};
  `;
  if (icon === "user") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.8172 2.16689C14.3731 3.72274 14.3731 6.24527 12.8172 7.80112C11.2614 9.35697 8.73885 9.35697 7.183 7.80112C5.62715 6.24527 5.62715 3.72274 7.183 2.16689C8.73885 0.611037 11.2614 0.611037 12.8172 2.16689Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 12.0081C14.554 12.0081 19 13.9751 19 17.0001V18.0001C19 18.5521 18.552 19.0001 18 19.0001H2C1.448 19.0001 1 18.5521 1 18.0001V17.0001C1 13.9741 5.446 12.0081 10 12.0081Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "password") {
    return (
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M4 8V5C4 2.791 5.791 1 8 1C10.209 1 12 2.791 12 5V8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13 19H3C1.895 19 1 18.105 1 17V10C1 8.895 1.895 8 3 8H13C14.105 8 15 8.895 15 10V17C15 18.105 14.105 19 13 19Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "email") {
    return (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M17 14.962H3C1.895 14.962 1 14.067 1 12.962V3C1 1.895 1.895 1 3 1H17C18.105 1 19 1.895 19 3V12.963C19 14.067 18.105 14.962 17 14.962V14.962Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 4.98096L10 7.98096L5 4.98096"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "interests") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M16 19H4C2.343 19 1 17.657 1 16V4C1 2.343 2.343 1 4 1H16C17.657 1 19 2.343 19 4V16C19 17.657 17.657 19 16 19Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.5 7.75L10.562 11.688L8.312 9.438L5.5 12.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "talent") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M5 5H15"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.99995 14.163L11.504 14.953C11.797 15.107 12.139 14.858 12.083 14.532L11.796 12.857L13.013 11.672C13.25 11.441 13.119 11.039 12.792 10.991L11.11 10.747L10.358 9.22202C10.212 8.92502 9.78795 8.92502 9.64195 9.22202L8.88995 10.747L7.20795 10.992C6.88095 11.039 6.74995 11.442 6.98695 11.673L8.20395 12.858L7.91695 14.533C7.86095 14.859 8.20295 15.108 8.49595 14.954L9.99995 14.163"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 1.15601H3C1.895 1.15601 1 2.05101 1 3.15601V17C1 18.105 1.895 19 3 19H17C18.105 19 19 18.105 19 17V3.15601C19 2.05101 18.105 1.15601 17 1.15601V1.15601Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "telegram") {
    return (
      <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
        <Path
          d="M9.79501 11.906L7.73001 13.915C7.37201 14.263 6.77301 14.109 6.62801 13.631L5.25201 9.10095"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.104 5.92699C12.104 5.92699 9.51501 8.26299 8.18701 9.46199C7.79001 9.81999 7.82301 10.45 8.25301 10.767L13.631 14.74C14.16 15.131 14.916 14.844 15.053 14.2L17.694 1.75299C17.822 1.15099 17.231 0.647989 16.657 0.868989L1.14201 6.85299C0.685014 7.02899 0.707014 7.68199 1.17401 7.82799L5.25101 9.09999"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "twitter") {
    return (
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1 12.55C1.029 12.545 3.7 11.65 3.7 11.65C0.694 8.61098 0.466 4.10998 2.8 0.849976C3.907 2.90898 5.974 4.80898 8.2 5.34998C8.286 2.74998 10.049 0.849976 12.7 0.849976C14.505 0.849976 15.567 1.53798 16.3 2.64998H19L17.2 5.34998M17.2 5.34998C17.2 11.65 13.6 16.15 7.3 16.15C3.7 16.15 2.257 14.271 1 12.55L17.2 5.34998Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "birthdate") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M16.383 6H17.444C18.304 6 19 6.696 19 7.556V17.445C19 18.304 18.304 19 17.444 19H6.556C5.696 19 5 18.304 5 17.444V16"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.00097 16H13.313C13.982 16 14.606 15.666 14.977 15.109L15.711 14.007C16.149 13.35 16.383 12.578 16.383 11.788V4C16.383 2.895 15.488 2 14.383 2H4.38297C3.27797 2 2.38297 2.895 2.38297 4V11.056C2.38297 11.677 2.23797 12.289 1.96097 12.845L1.10697 14.553C0.773971 15.218 1.25797 16 2.00097 16V16Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.37994 1V3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.3799 1V3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.18994 7H12.1899"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.18994 11H12.1899"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "hearfrom") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M16 18H5C3.895 18 3 17.105 3 16V5C3 3.895 3.895 3 5 3H16C17.105 3 18 3.895 18 5V16C18 17.105 17.105 18 16 18Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.467 11.504V11.297C10.467 10.619 10.886 10.252 11.306 9.96999C11.716 9.69399 12.127 9.33399 12.127 8.66999C12.127 7.75299 11.384 7.01099 10.468 7.01099C9.55198 7.01099 8.80798 7.75199 8.80798 8.66899"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.466 13.843C10.383 13.843 10.316 13.91 10.317 13.993C10.317 14.076 10.384 14.143 10.467 14.143C10.55 14.143 10.617 14.076 10.617 13.993C10.617 13.91 10.55 13.843 10.466 13.843"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18 6H19C20.105 6 21 6.895 21 8V19C21 20.105 20.105 21 19 21H8C6.895 21 6 20.105 6 19V18"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (icon === "smiley") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.3639C14.8493 21.8787 9.1508 21.8787 5.6361 18.3639C2.12138 14.8492 2.12138 9.15074 5.6361 5.63604C9.15082 2.12132 14.8493 2.12132 18.364 5.63604"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 17C13.667 17 15 15.667 15 14H9C9 15.667 10.333 17 12 17Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.5 9V10"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5 9V10"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
};

export default InputIcon;
