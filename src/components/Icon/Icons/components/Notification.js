/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Notification = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <g clipPath="url(#clip0)">
      <path d="M5.55693 2.17346C5.879 1.13992 6.85779 0.399902 8.00039 0.399902C9.14381 0.399902 10.1198 1.14061 10.4413 2.17348C12.6097 3.09405 14.1439 5.20418 14.1439 7.68167V11.1816C14.1439 11.8912 14.7361 12.4907 15.5004 12.4907C15.8318 12.4907 16.1004 12.7593 16.1004 13.0907C16.1004 13.4221 15.8318 13.6907 15.5004 13.6907H10.4834C10.2082 14.7947 9.19056 15.5999 8.00014 15.5999C6.80775 15.5999 5.79153 14.7945 5.51674 13.6907H0.500391C0.16902 13.6907 -0.0996094 13.4221 -0.0996094 13.0907C-0.0996094 12.7593 0.16902 12.4907 0.500391 12.4907C1.26312 12.4907 1.85691 11.8908 1.85691 11.1816V7.68167C1.85691 5.20458 3.38835 3.09417 5.55693 2.17346ZM2.68226 12.4907H13.3181C13.081 12.111 12.9439 11.6635 12.9439 11.1816V7.68167C12.9439 5.62759 11.6122 3.86613 9.72535 3.18085C9.52004 3.10628 9.37147 2.92602 9.33748 2.71024C9.24002 2.09149 8.688 1.5999 8.00039 1.5999C7.31179 1.5999 6.758 2.09246 6.66069 2.71024C6.62671 2.92602 6.47814 3.10628 6.27282 3.18085C4.38641 3.86597 3.05691 5.62713 3.05691 7.68167V11.1816C3.05691 11.6636 2.9195 12.1111 2.68226 12.4907ZM6.79442 13.6907C7.01746 14.1081 7.46693 14.3999 8.00014 14.3999C8.53218 14.3999 8.98203 14.108 9.20547 13.6907H6.79442Z"
        fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);
Notification.displayName = 'Notification';
Notification.propTypes = {
  size: PropTypes.string
}
export default Notification;
/* tslint:enable */
/* eslint-enable */
