import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { writeCar, _getAllCar, _addCar } from './schemas/CarSchema';

class DemoRealm extends Component {
    constructor(props) {
        super(props);
        this.state = { listCar: [] };
        this.car = {}
    }

    componentDidMount = async () => {
        const _data = await _getAllCar();
        this.setState({
            listCar: _data
        })
    }

    onPressAdd = async () => {
        _addCar(this.car);
        const _data = await _getAllCar();
        this.setState({
            listCar: _data
        })
    }

    render() {
        console.log("render", this.state.realm);
        const { listCar } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Nhap make"
                    onChangeText={(text) => {
                        this.car.make = text;
                    }}
                />

                <TextInput
                    placeholder="Nhap model"
                    onChangeText={(text) => {
                        this.car.model = text;
                    }}
                />

                <TextInput
                    placeholder="Nhap miles"
                    onChangeText={(text) => {
                        this.car.miles = parseInt(text);
                    }}
                />

                <TouchableOpacity
                    onPress={this.onPressAdd}
                >
                    <Text>Them Car</Text>
                </TouchableOpacity>
                <ScrollView
                    style={{
                        width: '100%'
                    }}
                >
                    {
                        listCar.map((item, index) => {
                            return <View
                                style={{
                                    backgroundColor: 'green',
                                    margin: 5,
                                    width: '100%'
                                }}
                            >
                                <Text>{item.make}</Text>
                                <Text>{item.model}</Text>
                                <Text>{item.miles}</Text>
                            </View>
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}
export default DemoRealm;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 100
    }
});