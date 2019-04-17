import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, ListView } from 'react-native';
import CardPatient from '../components/CardPatient';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ margin: 3, marginBottom: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1 }}>
                    <Text style={{ color: 'black', fontSize: 16 }}> Tình trạng bệnh nhân </Text>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <View style={{ width: 12, height: 12, backgroundColor: '#88C6ED', margin: 3 }}></View>
                        <Text>Yếu</Text>
                        <View style={{ width: 12, height: 12, backgroundColor: '#FFF000', margin: 3, marginLeft: 20 }}></View>
                        <Text>Trung bình</Text>
                        <View style={{ width: 12, height: 12, backgroundColor: '#EF4444', margin: 3, marginLeft: 20 }}></View>
                        <Text>Cao</Text>
                    </View>
                </View>
                <FlatList
                    data={[
                        {
                            key: '1',
                            level: 3,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '2',
                            level: 3,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '3',
                            level: 3,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '4',
                            level: 3,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '5',
                            level: 2,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '6',
                            level: 2,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '7',
                            level: 2,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '8',
                            level: 1,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '9',
                            level: 1,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '10',
                            level: 1,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },
                        {
                            key: '11',
                            level: 1,
                            name: 'Vũ Văn Mạnh',
                            type: 'Tiểu đường',
                            gender: 'Nam',
                            old: '21',
                        },

                    ]}
                    renderItem={({ item }) => <CardPatient
                        level={item.level}
                        name={item.name}
                        type={item.type}
                        gender={item.gender}
                        old={item.old}
                        navigation={this.props.navigation}
                    />}
                    
                />
            </View>
        );
    }
}