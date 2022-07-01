import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
//import awsConfig from 'backend-aws-exports/dev/aws-exports';
import awsConfig from 'aws-exports';

import 'antd/dist/antd.css';
// import initErrorLogging from 'utils/sentry';

import Route from './route';

import configureStore from './redux/configureStore';
import './asset/css/index.css';

// set amplify default config
Amplify.configure(awsConfig);

// This function make a bug which freezes the program when console.log an element
// initErrorLogging();

// Create redux store
const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<Provider store={store}>{<Route />}</Provider>, MOUNT_NODE);
// first need to install amplify not @4.13 ver
//delete all the stacks with error
// follow the guide https://aws.amazon.com/tw/blogs/mobile/restoring-aws-amplify-project-after-deleting-it-from-the-cloud/
