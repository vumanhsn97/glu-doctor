import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MedicineCard from './MedicineCard';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class MedicineTable extends Component {

    render() {
        let listMedicines = this.props.medicines.map((item, num) => 
            <MedicineCard 
                    key={num}
                    num={num}
                    name={item.name}
                    value={item.value}
                    use={item.use}
                />
        );

        return(
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Icon name='file-invoice' size={20} color='rgba(54, 175, 160, 1)' />
                    <Text style={{ color: 'rgba(54, 175, 160, 1)', fontSize: 16, marginLeft: 10 }}>Đơn thuốc</Text>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: 'rgba(54, 175, 160, 1)' }}>
                    <Text style={{ color: 'white', flex: 1, paddingLeft: 5 }}>Tên thuốc</Text>
                    <Text style={{ color: 'white', width: 80 }}>Liều lượng</Text>
                </View>              
                {listMedicines}
            </View>
        );
    }
}