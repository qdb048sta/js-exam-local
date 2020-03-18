import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import notFoundIcon from 'asset/image/not-found.jpg';

import styles from './PageEmpty.module.scss';

const PageEmpty = ({ image, description }) =>
  image === 'default' ? (
    <Empty className={styles.empty} description={description} />
  ) : (
    <Empty
      className={styles.empty}
      image={notFoundIcon}
      description={description}
    />
  );

PageEmpty.propTypes = {
  image: PropTypes.string,
  description: PropTypes.object.isRequired,
};

export default PageEmpty;
