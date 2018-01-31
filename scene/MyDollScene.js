/**
 * Created by wangpengbo on 2018/1/19.
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontWeight: 'bold',
  },
});

export default class HomeScene extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.txt}>这是我的娃娃界面！</Text>
      </View>
    );
  }
}

