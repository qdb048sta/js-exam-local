import React from 'react';
import PropTypes from 'prop-types';

import styles from './FullScreen.module.scss';

const FullScreenMask = ({ isShow, text }) => {
  if (isShow) {
    return (
      <div className={styles.fullScreenMask}>
        <span className={styles.text}>{text}</span>
      </div>
    );
  }

  return '';
};

FullScreenMask.propTypes = {
  isShow: PropTypes.bool.isRequired,
  text: PropTypes.string,
};

FullScreenMask.defaultProps = {
  isShow: false,
  text: '',
};

export default FullScreenMask;
