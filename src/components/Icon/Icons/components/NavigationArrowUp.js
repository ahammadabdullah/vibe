/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const NavigationArrowUp = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <g clipPath="url(#clip0)">
      <path d="M7.96484 15.7774C7.63347 15.7774 7.36484 15.5087 7.36484 15.1774L7.36484 2.48374L2.48046 7.36813C2.24615 7.60244 1.86625 7.60244 1.63193 7.36813C1.39762 7.13381 1.39762 6.75391 1.63193 6.5196L7.54058 0.610951C7.77489 0.376636 8.15479 0.376636 8.38911 0.610951L14.2978 6.5196C14.5321 6.75391 14.5321 7.13381 14.2978 7.36813C14.0634 7.60244 13.6835 7.60244 13.4492 7.36813L8.56484 2.48374L8.56484 15.1774C8.56484 15.5087 8.29621 15.7774 7.96484 15.7774Z"
        fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);
NavigationArrowUp.displayName = 'NavigationArrowUp';
NavigationArrowUp.propTypes = {
  size: PropTypes.string
}
export default NavigationArrowUp;
/* tslint:enable */
/* eslint-enable */
