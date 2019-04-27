import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MedicineScreen extends Component {

    render() {
        return(
            <View>
                <Text>Bệnh nhân: Vũ Văn Mạnh</Text>
                <Text>Tuổi: 22</Text>
                <Text>Các thành phần dị ứng: Không</Text>
                <Text>Bảng thuốc</Text>
            </View>
        );
    }
}