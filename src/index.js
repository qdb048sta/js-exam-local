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
//ReactDOM.render('hello word', document.getElementById('root')); this is simply for testing functionality
ReactDOM.render(<Provider store={store}>{<Route />}</Provider>, MOUNT_NODE);

// first need to install amplify not @4.13 ver
//delete all the stacks with error
// follow the guide https://aws.amazon.com/tw/blogs/mobile/restoring-aws-amplify-project-after-deleting-it-from-the-cloud/
//https://ithelp.ithome.com.tw/articles/10188245
//https://travor20814.medium.com/react-%E5%B0%88%E6%A1%88%E6%9E%B6%E6%A7%8B%E5%88%86%E4%BA%AB-%E6%88%91%E7%9A%84%E8%B8%A9%E9%9B%B7%E9%80%B2%E5%8C%96%E9%81%8E%E7%A8%8B-aceea0747045
// https://eyesofkids.gitbooks.io/react-basic-zh-tw/content/day27_redux_ex3/ give some concept of redux
// seems like problem happen on route https://v5.reactrouter.com/web/guides/quick-start maybe a good guide
