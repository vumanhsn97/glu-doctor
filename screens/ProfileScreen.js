import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileScreen extends Component {
    render() {
        return(
            <View>
                <Text>ProfileScreen</Text>
                <Icon size={20} name='home' color='black' />
            </View>
        );
    }
}