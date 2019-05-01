import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MedicineCard from './MedicineCard';

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
                <Text style={{ color: 'black'}}>Đơn thuốc</Text>
                {listMedicines}
            </View>
        );
    }
}