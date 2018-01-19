/**
 * Created by wangpengbo on 2018/1/19.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class HomeScene extends Component {

    render() {
        return (
            <View
                style={styles.container}>
                <Text style={styles.txt}>这是首页界面！</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontWeight: 'bold',
    }
});