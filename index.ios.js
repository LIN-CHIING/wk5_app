/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
//import Page from './page1';
//import Page from './page2';
 import Page from './page3';

const hk5 =()=>{
  return(
    <Page />
  );
};

AppRegistry.registerComponent('hk5', () => hk5);
