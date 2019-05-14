import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import CardMess from '../components/CardMess';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MessScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: '1',
                    highlight: true,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '2',
                    highlight: true,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '3',
                    highlight: true,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '4',
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '5',
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '6',
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '7',
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '8',
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '9',
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '10',
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },
                {
                    key: '11',
                    highlight: false,
                    name: 'Vũ Văn Mạnh',
                    mess: 'Tiểu đường',
                    time: '20/10/2018'
                },],
            patients: [],
        }
    }
    componentWillMount() {
        this.setState({ patients: [...this.state.data] })
    }

    searchPatient = (text) => {
        let list = [...this.state.data];
        for (let i = 0; i < list.length; i++) {
            if (list[i].name.indexOf(text) === -1) {
                list.splice(i, 1);
                i = i - 1;
            }
        }
        this.setState({ patients: list });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginBottom: 10, height: 60, borderBottomColor: '#EFEFEF', backgroundColor: 'rgba(54, 175, 160, 1)', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', flex: 1, borderRadius: 15, marginLeft: 5, marginRight: 5 }}>
                        <View style={{ justifyContent: 'center', paddingLeft: 10, paddingRight: 5 }}>
                            <Icon name='search' size={20} color='gray' />
                        </View>
                        <TextInput
                            style={{ flex: 1, padding: 5, }}
                            placeholder=''
                            onChangeText={(text) => this.searchPatient(text)}
                        />
                    </View>
                </View>
                <FlatList
                    data={this.state.patients}
                    renderItem={({ item }) => <CardMess
                        name={item.name}
                        mess={item.mess}
                        highlight={item.highlight}
                        time={item.time}
                        navigation={this.props.navigation}
                    />}

                />
            </View>
        );
    }
}