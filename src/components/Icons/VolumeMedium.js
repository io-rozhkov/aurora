import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const VolumeMediumIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    {children}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-161.000000, -179.000000)">
        <g transform="translate(161.000000, 177.000000)">
          <g>
            <rect x="0" y="0" width="24" height="24" />
            <path
              fill={color}
              {...color !== "currentColor" && { fillOpacity: ".65" }}
              fillRule="nonzero"
              d="M7.29289322,7 L12.1464466,2.14644661 C12.461429,1.83146418 13,2.05454757 13,2.5 L13,21.5 C13,21.9454524 12.461429,22.1685358 12.1464466,21.8535534 L7.29289322,17 L2.5,17 C1.11928813,17 -7.71327446e-14,15.8807119 -7.72715225e-14,14.5 L-8.43769499e-15,9.5 C-8.02136135e-15,8.11928813 1.11928813,7 2.5,7 L7.29289322,7 Z M7.85355339,7.85355339 C7.7597852,7.94732158 7.63260824,8 7.5,8 L2.5,8 C1.67157288,8 1,8.67157288 1,9.5 L1,14.5 C1,15.3284271 1.67157288,16 2.5,16 L7.5,16 C7.63260824,16 7.7597852,16.0526784 7.85355339,16.1464466 L12,20.2928932 L12,3.70710678 L7.85355339,7.85355339 Z M16.9160251,15.7773501 C16.7628489,16.0071144 16.4524142,16.0692014 16.2226499,15.9160251 C15.9928856,15.7628489 15.9307986,15.4524142 16.0839749,15.2226499 C16.6942954,14.307169 17,13.2372031 17,12 C17,10.7627969 16.6942954,9.69283097 16.0839749,8.7773501 C15.9307986,8.54758575 15.9928856,8.23715108 16.2226499,8.08397485 C16.4524142,7.93079862 16.7628489,7.99288556 16.9160251,8.2226499 C17.6390379,9.30716903 18,10.5705364 18,12 C18,13.4294636 17.6390379,14.692831 16.9160251,15.7773501 Z M18.8535534,17.8535534 C18.6582912,18.0488155 18.3417088,18.0488155 18.1464466,17.8535534 C17.9511845,17.6582912 17.9511845,17.3417088 18.1464466,17.1464466 C19.3798825,15.9130107 20,14.2076876 20,12 C20,9.79231245 19.3798825,8.08698926 18.1464466,6.85355339 C17.9511845,6.65829124 17.9511845,6.34170876 18.1464466,6.14644661 C18.3417088,5.95118446 18.6582912,5.95118446 18.8535534,6.14644661 C20.2867842,7.57967741 21,9.54102088 21,12 C21,14.4589791 20.2867842,16.4203226 18.8535534,17.8535534 Z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

VolumeMediumIcon.displayName = "VolumeMediumIcon";

VolumeMediumIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

VolumeMediumIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default VolumeMediumIcon;