import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class ButtonIcon extends Component {

    render() {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.screen)}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#5858FA', borderRadius: 10, padding: 5 }}>
                    <Icon name={this.props.icon} size={20} color='white' />
                    <Text style={{ fontSize: 18, color: 'white', marginLeft: 10 }}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}