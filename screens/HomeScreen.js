import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, ListView, TextInput } from 'react-native';
import CardPatient from '../components/CardPatient';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginBottom: 10, height: 60, borderBottomColor: '#EFEFEF', backgroundColor: '#5858FA', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', flex: 1, borderRadius: 15, marginLeft: 5, marginRight: 5 }}>
                        <View style={{justifyContent: 'center', paddingLeft: 10, paddingRight: 5}}>
                            <Icon name='search' size={20} color='gray' />
                        </View>
                        <TextInput
                            style={{ flex: 1, padding: 5, }}
                            placeholder=''
                        />
                    </View>
                    <View style={{ paddingLeft: 10, paddingRight: 10}}>
                     <Icon name='user-plus' size={20} color='white' />   
                    </View>
                </View>
                <FlatList
                    data={[
                        {
                            key: '1',
                            noti: true,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '2',
                            noti: true,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '3',
                            noti: true,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '4',
                            noti: false,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '5',
                            noti: false,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '6',
                            noti: false,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '7',
                            noti: false,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '8',
                            noti: false,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '9',
                            noti: false,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '10',
                            noti: false,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },
                        {
                            key: '11',
                            noti: false,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            date: '01/02/2018'
                        },

                    ]}
                    renderItem={({ item }) => <CardPatient
                        noti={item.noti}
                        name={item.name}
                        type={item.type}
                        date={item.date}
                        navigation={this.props.navigation}
                    />}

                />
            </View>
        );
    }
}