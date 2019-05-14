import React, { Component } from 'react';
import { View, Text, Picker, Modal, TouchableHighlight, Alert, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class MedicineScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            unit: '',
            use: '',
            medicine: '',
            modalVisible: false,
            medicines: [{
                key: 'Medicine 1'
            }, {
                key: 'Medicine 2'
            }, {
                key: 'Medicine 3'
            }, {
                key: 'Medicine 4'
            }, {
                key: 'Medicine 5'
            }]
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}
                >
                    <View style={{ flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFFE' }}>
                        <View style={{ height: 200, width: '80%', backgroundColor: 'white', padding: 10 }}>
                            <View style={{ justifyContent: 'center', flexDirection: 'row', marginBottom: 40 }}>
                                <Text style={{ fontSize: 22, color: 'black' }}>Liều lượng</Text>
                            </View>
                            <View style={{ flexDirection: 'row', height: 40 }}>
                                <View style={{ borderRadius: 10, flex: 1, borderWidth: 1, height: 40, borderColor: '#EFEFEF' }}>
                                    <TextInput style={{ flex: 1, color: 'black' }} autoFocus={true} keyboardType='numeric' />
                                </View>
                                <Picker
                                    selectedValue={this.state.unit}
                                    style={{ height: 50, width: 110 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ unit: itemValue })
                                    }>
                                    <Picker.Item label="lần/ngày" value="lần/ngày" />
                                    <Picker.Item label="lần/tuần" value="lần/tuần" />
                                    <Picker.Item label="lần/tháng" value="lần/tháng" />
                                </Picker>
                            </View>
                            <View style={{ flex: 1, borderTopColor: 'blue', borderTopWidth: 1, marginTop: 30, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                                    <Text style={{ color: 'blue', padding: 10 }}>Xong</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={{ borderRadius: 10, flexDirection: 'row', borderWidth: 1, height: 40, borderColor: '#EFEFEF' }}>
                    <TextInput style={{ flex: 1, color: 'black' }} autoFocus={true} defaultValue={this.state.medicine} onChangeText={(text) => this.setState({ medicine: text })} />
                    <TouchableOpacity onPress={() => { this.setState({ medicine: '' }) }}>
                        {this.state.medicine ? <View style={{ justifyContent: 'center', alignItems: 'center', height: 40, borderRadius: 10, padding: 5 }}>
                            <Icon name='backspace' size={18} color='rgba(54, 175, 160, 1)' />
                        </View> : <Text></Text>}
                    </TouchableOpacity>
                </View>
                {this.state.medicine ? <TouchableOpacity onPress={() => this.setState({modalVisible: !this.state.modalVisible})}>
                    <View style={{ borderBottomColor: '#EFEFEF', borderBottomWidth: 3, flexDirection: 'row' }}>
                    <Text style={{ color: 'rgba(54, 175, 160, 1)', padding: 5, paddingTop: 10, flex: 1 }}>{this.state.medicine}</Text>
                    <View style={{ justifyContent: 'center', padding: 5 }}>
                        <Icon name='arrow-right' size={18} color='rgba(54, 175, 160, 1)' />
                    </View>
                </View>
                </TouchableOpacity> : <Text></Text>}
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.medicines}
                        renderItem={({ item }) => <TouchableOpacity
                            onPress={() => this.setState({ medicine: item.key, modalVisible: !this.state.modalVisible })}
                            style={{ paddingBottom: 10, paddingTop: 5, borderBottomWidth: 1, borderBottomColor: '#EFEFEF' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 1 }}>{item.key}</Text>
                                <View style={{ justifyContent: 'center', padding: 5 }}>
                                    <Icon name='external-link-square-alt' size={18} color='gray' />
                                </View>
                            </View>
                        </TouchableOpacity>}
                    />
                </View>
            </View>
        );
    }
}