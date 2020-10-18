/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Menu = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M3 8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8C1 7.44772 1.44772 7 2 7C2.55228 7 3 7.44772 3 8Z" fill="currentColor" />
    <path d="M2.00039 7.5999C1.77948 7.5999 1.60039 7.77899 1.60039 7.9999 1.60039 8.22082 1.77948 8.3999 2.00039 8.3999 2.2213 8.3999 2.40039 8.22082 2.40039 7.9999 2.40039 7.77899 2.2213 7.5999 2.00039 7.5999zM.400391 7.9999C.400391 7.11625 1.11674 6.3999 2.00039 6.3999 2.88405 6.3999 3.60039 7.11625 3.60039 7.9999 3.60039 8.88356 2.88405 9.5999 2.00039 9.5999 1.11674 9.5999.400391 8.88356.400391 7.9999zM8.00039 6.3999C7.11674 6.3999 6.40039 7.11625 6.40039 7.9999 6.40039 8.88356 7.11674 9.5999 8.00039 9.5999 8.88405 9.5999 9.60039 8.88356 9.60039 7.9999 9.60039 7.11625 8.88405 6.3999 8.00039 6.3999zM14.0004 6.3999C13.1167 6.3999 12.4004 7.11625 12.4004 7.9999 12.4004 8.88356 13.1167 9.5999 14.0004 9.5999 14.884 9.5999 15.6004 8.88356 15.6004 7.9999 15.6004 7.11625 14.884 6.3999 14.0004 6.3999z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Menu.displayName = 'Menu';
Menu.propTypes = {
  size: PropTypes.string
}
export default Menu;
/* tslint:enable */
/* eslint-enable */
