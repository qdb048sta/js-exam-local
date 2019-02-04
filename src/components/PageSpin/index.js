import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import styles from './PageSpin.module.scss';

const PageSpin = ({ children, spinning }) => (
  <Spin className={styles.spin} spinning={spinning} size="large">
    {children}
  </Spin>
);

PageSpin.propTypes = {
  children: PropTypes.array.isRequired,
  spinning: PropTypes.bool.isRequired,
};

export default PageSpin;
