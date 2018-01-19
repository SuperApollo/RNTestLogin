/**
 * Created by wangpengbo on 2018/1/19.
 */

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

import {TabNavigator} from 'react-navigation';
import HomePageScene from './HomePageScene';
import CreditShopScene from './CreditShopScene';
import MyDollScene from './MyDollScene';
import MineScene from './MineScene';

export default class HomeNavigator extends Component{
    render(){
        const Tabs =TabNavigator(
            //navigator 的 item
            {
                HomePage: {
                    screen: HomePageScene,
                    navigationOptions: {
                        tabBarLabel: '首页',
                        tabBarIcon: ({tintColor}) => (
                            <Image
                                source={require('../image/navigator_main_select.png')}
                                style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                            />
                        ),
                    },
                },
                CreditShop: {
                    screen: CreditShopScene,
                    navigationOptions: {
                        tabBarLabel: '积分小铺',
                        tabBarIcon: ({tintColor}) => (
                            <Image
                                source={require('../image/navigator_creditshop_select.png')}
                                style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                            />
                        ),
                    },
                },
                MyDoll: {
                    screen: MyDollScene,
                    navigationOptions: {
                        tabBarLabel: '我的娃娃',
                        tabBarIcon: ({tintColor}) => (
                            <Image
                                source={require('../image/navigator_mydoll_select.png')}
                                style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                            />
                        ),
                    },
                },
                Mine: {
                    screen: MineScene,
                    navigationOptions: {
                        tabBarLabel: '我的',
                        tabBarIcon: ({tintColor}) => (
                            <Image
                                source={require('../image/navigator_my_select.png')}
                                style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                            />
                        ),
                    },
                },
            },
            //navigator 整体属性设置
            {
                tabBarPosition: 'bottom',
                tabBarOptions: {
                    activeTintColor: '#fd5f53',
                    inactiveTintColor: '#9b9b9b',
                    showIcon: true,//显示item图标
                    indicatorStyle: {//指示器隐藏
                        height: 0,
                    },
                    style: styles.tabBar,
                    tabStyle: styles.tabBarItem,
                    labelStyle: styles.tabBarLabel,
                    pressColor: 'gray',
                    pressOpacity: 0.8,
                    upperCaseLabel: false,

                },
                height: 30,
                backgroundColor: '#fafafa',
            }
        )
        return (
            <Tabs/>
        )
    }
}



const styles = StyleSheet.create({
    tabBarImage: {
        width: 2,
        height: 2,
    },
    tabBar: {
        backgroundColor: 'white',
    },
    tabBarLabel: {
        fontSize: 12,
    },
    tabBarItem: {
        height: 56,
    },
})

