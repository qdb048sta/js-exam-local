import React from 'react';
import PropTypes from 'prop-types';
import { withAuthenticator } from 'aws-amplify-react';

import Header from './Header';
import SignOnModal from './SignOnModal';

const Admin = props => (
  <React.Fragment>
    <SignOnModal />
    <Header />
    {props.children}
  </React.Fragment>
);

Admin.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default withAuthenticator(Admin);
