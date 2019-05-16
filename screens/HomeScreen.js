import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, ListView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import CardPatient from '../components/CardPatient';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: '1',
                    noti: true,
                    highlight: true,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '2',
                    noti: true,
                    highlight: true,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '3',
                    noti: true,
                    highlight: true,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '4',
                    noti: false,
                    highlight: true,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '5',
                    noti: false,
                    highlight: true,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '6',
                    noti: false,
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '7',
                    noti: false,
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '8',
                    noti: false,
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '9',
                    noti: false,
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '10',
                    noti: false,
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },
                {
                    key: '11',
                    noti: false,
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    type: 'Tiểu đường',
                },],
            patients: [],
            focus: false,
            textsearch: "",
        }
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        );
      }
    
      componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }
    
      _keyboardDidShow() {
      }
    
      _keyboardDidHide = () => {
        this.setState({textsearch: "", focus: false})
      }
    

    componentWillMount() {
        this.setState({ patients: [...this.state.data] })
    }

    searchPatient = ({text}) => {
        this.setState({textsearch: text});
        if (text === "") {
            this.setState({ patients: [] });
            return;
        }
        let list = [...this.state.data];
        for (let i = 0; i < list.length; i++) {
            if (list[i].name.indexOf(text) === -1) {
                list.splice(i, 1);
                i = i - 1;
            }
        }
        this.setState({ patients: list, textsearch: text });
    }

    onInputFocus = ({text}) => {
        this.setState({ focus: true });
        this.searchPatient(text);
    }

    backClick = () => {
        let list = [...this.state.data];
        this.setState({ focus: false, patients: list, textsearch: "" });
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginBottom: 10, height: 60, borderBottomColor: '#EFEFEF', backgroundColor: 'rgba(54, 175, 160, 1)', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', flex: 1, borderRadius: 15, marginLeft: 5, marginRight: 5 }}>
                        <View style={{ justifyContent: 'center', paddingLeft: 10, paddingRight: 5 }}>
                            { this.state.focus ? <TouchableOpacity onPress={this.backClick} >
                                <Icon name='arrow-circle-left' size={20} color='gray' />
                            </TouchableOpacity> : <Icon name='search' size={20} color='gray' />}
                        </View>
                        <TextInput
                            style={{ flex: 1, padding: 5, }}
                            placeholder=''
                            value={this.state.textsearch}
                            onFocus={(text) => this.onInputFocus({text})}
                            onChangeText={(text) => this.searchPatient({text})}
                        />
                    </View>
                    {this.state.focus ? <Text></Text> : <TouchableOpacity>
                        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <Icon name='user-plus' size={20} color='white' />
                        </View>
                    </TouchableOpacity>}
                </View>
                <FlatList
                    data={this.state.patients}
                    keyboardShouldPersistTaps='always'
                    renderItem={({ item }) => <CardPatient
                        noti={item.noti}
                        name={item.name}
                        type={item.type}
                        highlight={item.highlight}
                        navigation={this.props.navigation}
                    />}

                />
            </View>
        );
    }
}