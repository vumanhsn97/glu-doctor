import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class MedicineCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    onHandleClick = () => {
        this.setState({ open: !this.state.open });
    }

    viewOpen = () => {
        return (
            <View style={{ flexDirection: 'column', paddingRight: 20}}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ marginRight: 50 }}>
                        <Text style={{ color: '#5858FA' }}>Xóa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#5858FA' }}>Sửa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={{ backgroundColor: (this.props.num % 2 === 0) ? 'white' : '#A4A4A4', }}>
                <TouchableOpacity onPress={() => this.onHandleClick()}>
                    <View style={{
                        flexDirection: 'row',
                        padding: 5
                    }}>
                        <Text style={{ flex: 1, color: 'black' }}>{this.props.name}</Text>
                        <Text style={{ width: 80, color: 'black' }}>{this.props.value}</Text>
                    </View>
                    { this.state.open && <Text style={{ color: 'black', padding: 5}}>
                        Cách dùng:  {this.props.use}
                    </Text>}
                </TouchableOpacity>
                {this.state.open && this.viewOpen()}
            </View>
        );
    }
}