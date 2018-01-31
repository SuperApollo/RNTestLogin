/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 注意在 jsx 中不能用//做注释，否则报错
 * Cannot add a child that doesn't have a YogaNode to a parent without a measure function!
 (Trying to add a 'ReactRawTextShadowNode' to a 'LayoutShadowNode')
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import LoginScene from './scene/LoginScene';
import WelcomeScene from './scene/WelcomeScene';
import HomeScene from './scene/HomeScene';
import RegisterScene from './scene/RegisterScene';


const RootNavigator = StackNavigator({
  Login: {
    header: null,
    screen: LoginScene,
  },

  Register: {
    screen: RegisterScene,
  },

  Home: {
    screen: HomeScene,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  welcome: {
    screen: WelcomeScene,

  },
});

export default RootNavigator;

