import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import screen1 from './src demo redux/screens/screen1';
import screen2 from './src demo redux/screens/screen2';
import screen3 from './src demo redux/screens/screen3';

const RootNav = createStackNavigator({
    screen1:{
        screen: screen1
    },
    screen2:{
        screen: screen2
    },
    screen3:{
        screen: screen3
    }
},{
    headerMode:"none",
});

export default createAppContainer(RootNav);