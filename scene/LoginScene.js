/**
 * Created by wangpengbo on 2018/1/19.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 注意在 jsx 中不能用//做注释，否则报错Cannot add a child that doesn't have a YogaNode to a parent without a measure function!
 (Trying to add a 'ReactRawTextShadowNode' to a 'LayoutShadowNode')
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  img: {
    width: 30,
    height: 30,
  },
  input: {
    width: 200,
    height: 40,
    color: '#fff', // 输入框输入的文本为白色
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#66f',
    marginBottom: 8,
  },
  button: {
    height: 50,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#66f',
    marginBottom: 8,
  },
  btText: {
    color: '#fff',
    fontWeight: 'bold', // 粗体
  },
});

export default class App extends Component {
    userName = '';
    passWord = '';

    // 用户名输入回调
    onUserNameChanged = (newUserName) => {
      console.log(newUserName);
      this.userName = newUserName;
    };

    onPasswordChanged = (newPassword) => {
      console.log(newPassword);
      this.passWord = newPassword;
    };

    // 登录
    doLogin = () => {
      if (this.userName === 'admin' && this.passWord === '123') {
        // ToastAndroid.show(this.userName + '登录成功!', ToastAndroid.SHORT);
        ToastAndroid.show(`${this.userName}登录成功!`, ToastAndroid.SHORT);
        const { navigate } = this.props.navigation;
        navigate('Home');
      } else {
        Alert.alert(`${this.userName}登录失败!`);
      }
    };

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View
          style={styles.container}
        >
          <View
            style={styles.inputBox}
          >
            <Image
              style={styles.img}
              source={require('../image/userName.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="请输入用户名"
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"// 去掉下划线
              onChangeText={this.onUserNameChanged}
            />
          </View>
          <View
            style={styles.inputBox}
          >
            <Image
              source={require('../image/passWord.png')}
              style={styles.img}
            />
            <TextInput
              style={styles.input}
              secureTextEntry// 密码框
              placeholder="请输入密码"
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"
              onChangeText={this.onPasswordChanged}
            />
          </View>
          <TouchableOpacity
            onPress={this.doLogin}
            style={styles.button}
          >
            <Text
              style={styles.btText}
            >登 录
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={styles.button}
          >
            <Text
              style={styles.btText}
            >注 册
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={styles.button}
          >
            <Text style={styles.btText}>跳转到主页</Text>
          </TouchableOpacity>
        </View>

      );
    }
}

