import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CardParam extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', height: 50, paddingLeft: 20 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Icon name={this.props.icon} size={30} color='blue' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ fontSize: 18 }}>{this.props.value}</Text>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', paddingLeft: 5 }}>
                        {(this.props.noti===true) && <Icon name='exclamation' size={15} color='red' />}
                    </View>
                </View>
            </View>
        );
    }
}