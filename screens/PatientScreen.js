import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardParam from '../components/CardParam';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <View style={{ justifyContent: 'center', flexDirection: 'column', height: 80, marginBottom: 10, backgroundColor: 'blue' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 60, height: 60, borderRadius: 60 / 2, backgroundColor: 'black', justifyContent: 'space-between', margin: 5 }}>

                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <Text>Vũ Văn Mạnh</Text>
                            <Text>22 Tuổi</Text>
                            <Text>Hồ Chí Minh</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <View style={{ width: '49%', borderBottomRightRadius: 5, borderRightWidth: 1, borderBottomWidth: 1, borderColor: 'blue' }}>
                        <CardParam
                            noti={true}
                            title='Đường huyết'
                            value='120mg/dL'
                            icon='tint'
                        />
                    </View>
                    <View style={{ width: '49%', borderBottomLeftRadius: 5, borderBottomWidth: 1, borderLeftWidth: 1, borderColor: 'blue' }}>
                        <CardParam
                            noti={true}
                            title='Huyết áp'
                            value='120mmHg'
                            icon='stethoscope'
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <View style={{ width: '49%', borderRadius: 5, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'blue' }}>
                        <CardParam
                            noti={false}
                            title='HbA1c'
                            value='5%'
                            icon='hiking'
                        />
                    </View>
                    <View style={{ width: '49%', borderRadius: 5, borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 1, borderColor: 'blue' }}>
                        <CardParam
                            noti={false}
                            title='Nhịp tim'
                            value='100 n/p'
                            icon='heartbeat'
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '49%', borderRadius: 5, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'blue' }}>
                        <CardParam
                            noti={false}
                            title='Chiều cao'
                            value='1.66m'
                            icon='child'
                        />
                    </View>
                    <View style={{ width: '49%', borderRadius: 5, borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 1, borderColor: 'blue' }}>
                        <CardParam
                            noti={false}
                            title='Cân nặng'
                            value='50Kg'
                            icon='weight'
                        />
                    </View>
                </View>
            </View>
        );
    }
}