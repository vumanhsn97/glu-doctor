import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class AdviceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <View style={{ padding: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 10 }} numberOfLines={1} >{this.props.title}</Text>
                <Text style={{ color: 'black' }} numberOfLines={1} >{this.props.content}</Text>
            </View>
        );
    }
}