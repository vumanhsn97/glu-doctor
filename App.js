/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './screens/HomeScreen';
import PatientScreen from './screens/PatientScreen';
import MessScreen from './screens/MessScreen';
import NotifyScreen from './screens/NotifyScreen';
import ProfileScreen from './screens/ProfileScreen';

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
     header: null,
    }),
  },
  
});

const MessStack = createStackNavigator({
  MessScreen: {
    screen: MessScreen,
    navigationOptions: () => ({
     header: null,
    }),
  },
});

const NotifyStack = createStackNavigator({
  NotifyScreen:  {
    screen: NotifyScreen,
    navigationOptions: () => ({
     header: null,
    }),
  },
});

const ProfileStack = createStackNavigator({
  ProfileScreen:  {
    screen: ProfileScreen,
    navigationOptions: () => ({
     header: null,
    }),
  },
});

const TabNavigator = createMaterialTopTabNavigator({
  HomeStack: HomeStack,
  MessStack: MessStack,
  NotifyStack: NotifyStack,
  ProfileStack: ProfileStack
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor}) => {
      let iconName;
      const { routeName } = navigation.state;
      if (routeName === 'HomeStack') {
        iconName='address-book';
      } else if (routeName === 'MessStack') {
        iconName = 'comments';
      } else if (routeName === 'NotifyStack') {
        iconName = 'bell';
      } else if (routeName === 'ProfileStack') {
        iconName = 'user';
      }
      return <Icon size={20} color={tintColor} name={iconName} />;
    },
    title: 'hheaea',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'silver',
      indicatorStyle: {
        opacity: 0
      },
      style: {
        backgroundColor: '#5858FA',
        borderTopColor: '#EFEFEF',
        borderTopWidth: 1,
      },
      showLabel: false,
      showIcon: true,
    },
  })
});

const TabScreen = createStackNavigator({
  TabNavigator:  {
    screen: TabNavigator,
    navigationOptions: () => ({
     header: null
    }),
  },
  PatientScreen:  {
    screen: PatientScreen,
    navigationOptions: () => ({
     header: null
    }),
  },
});

export default createAppContainer(TabScreen);
