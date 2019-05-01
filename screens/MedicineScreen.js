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
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}
                >
                    <View style={{ flex: 1, padding: 10 }}>
                        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                            <View style={{ flex: 1, borderRadius: 10, borderWidth: 1, height: 40, borderColor: '#EFEFEF', marginRight: 20 }}>
                                <TextInput style={{ flex: 1, color: 'black' }} defaultValue={this.state.medicine} />
                            </View>
                            <TouchableOpacity>
                                <View style={{ justifyContent: 'center', alignItems: 'center', height: 40, borderRadius: 10, padding: 5, backgroundColor: 'blue' }}>
                                    <Text>Thêm mới</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={this.state.medicines}
                                renderItem={({ item }) => <TouchableOpacity
                                    onPress={() => this.setState({ medicine: item.key, modalVisible: !this.state.modalVisible })}
                                    style={{ paddingBottom: 10, paddingTop: 5, borderBottomWidth: 1, borderBottomColor: '#EFEFEF' }}><Text>{item.key}</Text></TouchableOpacity>}
                            />
                        </View>
                    </View>
                </Modal>
                <View style={{ marginLeft: 10, marginRight: 10 }} >
                    <Text style={{ width: '100%', borderRadius: 10, borderWidth: 1, borderColor: '#EFEFEF', padding: 10, marginBottom: 10, color: 'black' }}
                        onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                        {this.state.medicine === '' ? 'Tên thuốc' : this.state.medicine}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, borderRadius: 10, borderWidth: 1, paddingLeft: 5, height: 40, borderColor: '#EFEFEF', marginRight: 20 }}>
                            <TextInput style={{ flex: 1, color: 'black' }} keyboardType='numeric' 
                                placeholder='Số lượng'
                                placeholderTextColor='black'
                                onKeyPress={(value) => { this.setState({ value: value }) }} />
                        </View>
                        <Picker
                            selectedValue={this.state.unit}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ unit: itemValue })
                            }>
                            <Picker.Item label="Viên" value="viên" />
                            <Picker.Item label="Hộp" value="hộp" />
                            <Picker.Item label="Chai" value="chai" />
                        </Picker>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, borderRadius: 10, borderWidth: 1, height: 100, borderColor: '#EFEFEF' }}>
                            <TextInput style={{ flex: 1, color: 'black' }} 
                                onKeyPress={(use) => { this.setState({ use: use })}}
                                textAlignVertical='top'
                                placeholder='Cách dùng'
                                placeholderTextColor='black'
                                multiline={true}
                                />
                        </View>
                    </View>
                    <Text style={{ marginTop: 20 }}>Các thành phần dị ứng</Text>
                </View>
            </View>
        );
    }
}