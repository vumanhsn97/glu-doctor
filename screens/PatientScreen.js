import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import CardParam from '../components/CardParam';
import ButtonIcon from '../components/ButtonIcon';
import EatTable from '../components/EatTable';
import AdviceCard from '../components/AdviceCard';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medicines: [{
                name: 'Medicine 1',
                value: '12 viên',
                use: 'Sử dụng 2 lần 1 ngày',
            },
            {
                name: 'Medicine 2',
                value: '18 viên',
                use: 'Sử dụng 3 lần 1 ngày',
            },
            {
                name: 'Medicine 3',
                value: '6 viên',
                use: 'Sử dụng 1 lần 1 ngày',
            },
            {
                name: 'Medicine 4',
                value: '18 viên',
                use: 'Sử dụng 3 lần 1 ngày',
            },
            {
                name: 'Medicine 5',
                value: '18 viên',
                use: 'Sử dụng 3 lần 1 ngày',
            },],
            advices: [{
                title: 'Chào bạn',
                content: 'Tôi nhờ bạn xíu',
            }, {
                title: 'Chào bạn thân mến',
                content: 'Tôi nhờ bạn xíu có được không. Nếu không thì nói sớm. Nhơ nói sớm đấy nhé hihi',
            } ]
        }
    }

    render() {
        listAdvice = this.state.advices.map((item) => {
            return(<AdviceCard key={item.title}
                    title={item.title}
                    content={item.content}
                />);
        })

        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flexDirection: 'column', height: 100, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ width: 80, height: 80, borderRadius: 80 / 2, backgroundColor: 'black', justifyContent: 'space-between', margin: 5 }}>

                        </View>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text style={{ fontSize: 20, color: 'black' }}>Vũ Văn Mạnh</Text>
                            <Text style={{ marginTop: 10, color: 'black' }}>22 Tuổi</Text>
                            <Text style={{ color: 'black' }}>Hồ Chí Minh</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <View style={{ width: '49%' }}>
                        <CardParam
                            noti={true}
                            title='Đường huyết'
                            value='120mg/dL'
                            icon='tint'
                        />
                    </View>
                    <View style={{ width: '49%' }}>
                        <CardParam
                            noti={true}
                            title='Huyết áp'
                            value='120mmHg'
                            icon='stethoscope'
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <View style={{ width: '49%' }}>
                        <CardParam
                            noti={false}
                            title='HbA1c'
                            value='5%'
                            icon='hiking'
                        />
                    </View>
                    <View style={{ width: '49%' }}>
                        <CardParam
                            noti={false}
                            title='Nhịp tim'
                            value='100 n/p'
                            icon='heartbeat'
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '48%' }}>
                        <CardParam
                            noti={false}
                            title='Chiều cao'
                            value='1.66m'
                            icon='child'
                        />
                    </View>
                    <View style={{ width: '48%' }}>
                        <CardParam
                            noti={false}
                            title='Cân nặng'
                            value='50Kg'
                            icon='weight'
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginTop: 10 }}>
                    <View style={{ width: '49%' }}>
                        <ButtonIcon
                            icon='comments'
                            label='Nhắn tin'
                            screen='ChatScreen'
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View style={{ width: '49%' }}>
                        <ButtonIcon
                            icon='phone-square'
                            label='Gọi điện'
                            screen='MedicineScreen'
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Icon name='clipboard' size={20} color='rgba(54, 175, 160, 1)' />
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text style={{ color: 'rgba(54, 175, 160, 1)', fontSize: 16, marginLeft: 10 }}>Lời khuyên</Text>
                        </View>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('AddAdvice') }>
                            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                <Icon name='plus-circle' size={20} color='rgba(54, 175, 160, 1)' />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {listAdvice}
                    <EatTable />
                </View>
            </ScrollView>
        );
    }
}