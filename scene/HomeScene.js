/**
 * Created by wangpengbo on 2018/1/19.
 */

import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import { TabNavigator } from 'react-navigation';
import HomePageScene from './HomePageScene';
import CreditShopScene from './CreditShopScene';
import MyDollScene from './MyDollScene';
import MineScene from './MineScene';

const styles = StyleSheet.create({
  tabBarImage: {
    width: 20,
    height: 20,
  },
  tabBar: {
    backgroundColor: '#fafafa',
    height: 47,
  },
  tabBarLabel: {
    fontSize: 9,
    margin: 0,
  },
  tabBarItem: {
  },
});

export default class HomeNavigator extends Component {
  render() {
    const Tabs = TabNavigator(
      // navigator 的 item
      {
        HomePage: {
          screen: HomePageScene,
          navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
              <Image
                source={require('../image/navigator_main_select.png')}
                style={[styles.tabBarImage, { tintColor }]}
              />
            ),
          },
        },
        CreditShop: {
          screen: CreditShopScene,
          navigationOptions: {
            tabBarLabel: '积分小铺',
            tabBarIcon: ({ tintColor }) => (
              <Image
                source={require('../image/navigator_creditshop_select.png')}
                style={[styles.tabBarImage, { tintColor }]}
              />
            ),
          },
        },
        MyDoll: {
          screen: MyDollScene,
          navigationOptions: {
            tabBarLabel: '我的娃娃',
            tabBarIcon: ({ tintColor }) => (
              <Image
                source={require('../image/navigator_mydoll_select.png')}
                style={[styles.tabBarImage, { tintColor }]}
              />
            ),
          },
        },
        Mine: {
          screen: MineScene,
          navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
              <Image
                source={require('../image/navigator_my_select.png')}
                style={[styles.tabBarImage, { tintColor }]}
              />
            ),
          },
        },
      },
      // navigator 整体属性设置
      {
        tabBarPosition: 'bottom',
        tabBarOptions: {
          activeTintColor: '#fd5f53',
          inactiveTintColor: '#9b9b9b',
          showIcon: true, // 显示item图标
          indicatorStyle: {// 指示器隐藏
            height: 0,
          },
          style: styles.tabBar,
          tabStyle: styles.tabBarItem,
          labelStyle: styles.tabBarLabel,
          pressColor: 'gray',
          pressOpacity: 0.8,
          upperCaseLabel: false,

        },
      },
    );
    return (
      <Tabs />
    );
  }
}

