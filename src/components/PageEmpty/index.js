import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import notFoundIcon from 'asset/image/not-found.jpg';

import styles from './PageEmpty.module.scss';

const PageEmpty = ({ image, description }) => {
  const imageFinal = image === 'default' ? '' : notFoundIcon;

  return (
    <Empty
      className={styles.empty}
      image={imageFinal}
      description={description}
    />
  );
};

PageEmpty.propTypes = {
  image: PropTypes.string,
  description: PropTypes.object.isRequired,
};

export default PageEmpty;
