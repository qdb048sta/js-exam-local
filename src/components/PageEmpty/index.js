import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import styles from './PageEmpty.module.scss';
import notFoundIcon from 'asset/image/not-found.jpg';

const PageEmpty = ({ image, description }) => {
  const imageFinal = image === 'default' ? '' : notFoundIcon;

  return (
    <Empty
      className={styles.empty}
      image={imageFinal}
      description={description}
    >
    </Empty>
  );
};

PageEmpty.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
};
  
export default PageEmpty;