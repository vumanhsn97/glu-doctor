import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CardPatient extends Component {

    render() {
        const back_color = this.props.highlight ? '#EFEFEF' : 'white'; 
        return (
            <TouchableOpacity style={style.border} onPress={() => this.props.navigation.navigate('PatientScreen', { patientId: this.props.key })}>
                <View style={{
                    width: '94%',
                    margin: '3%',
                    marginTop: 5,
                    marginBottom: 5,
                    height: 70,
                    borderRadius: 10,
                    borderColor: '#EFEFEF',
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: back_color,
                }}>
                    <Image source={{uri: 'https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg'}} style={style.avatar} />
                    <View>
                        <Text style={style.name}>{this.props.name}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 7 }}>
                            <Text style={style.label}>{this.props.type}</Text>
                        </View>
                    </View>
                    <View style={style.right}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', paddingRight: 2, marginTop: 12, justifyContent: 'flex-end' }}>
                                {this.props.noti && <Icon name='exclamation-circle' size={16} color='red' />}
                                {!this.props.noti && <Text></Text>}
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={style.label}> {this.props.date} </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    avatar: {
        margin: 5,
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        justifyContent: 'flex-start'
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5,
        flex: 1
    },
    name: {
        fontSize: 20,
        marginTop: 5,
        color: 'black',
        fontFamily: 'Arial'
    },
    label: {
        fontSize: 13,
        marginLeft: 2,
        color: 'black',
        fontFamily: 'Arial'
    },
});