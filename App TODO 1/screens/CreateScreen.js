import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';
import { createTask } from '../actions/TaskAction';
import Textarea from 'react-native-textarea';
import DatePicker from 'react-native-datepicker';

class CreateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            detail: '',
            date: "11-07-2019",
            time: "19:54:00"
        };
    }

    render() {
        const data = {
            title: this.state.title,
            detail: this.state.detail,
            date: this.state.date,
            time: this.state.time
        }
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='transparent'
                    barStyle='dark-content'
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 70 }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: '500' }}>Create</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'gray' }}>
                    <Text style={{ fontSize: 20, marginLeft: 10, color: 'red' }}>Title</Text>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        onChangeText={(text) => this.setState({ title: text })}
                        maxLength={50}
                        placeholder={'Input title'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                    <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, color: 'red' }}>Detail</Text>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={[styles.textarea, { height: 120 }]}
                        onChangeText={(text) => this.setState({ detail: text })}
                        defaultValue={this.state.text}
                        maxLength={150}
                        placeholder={'Input Detail'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                    <View style={{ height: 200, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, color: 'red' }}>Date</Text>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select date"
                            format="DD-MM-YYYY"
                            minDate="01-01-1990"
                            maxDate="01-01-2040"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                        <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, color: 'red' }}>Time</Text>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.time}
                            mode="time"
                            placeholder="Select time"
                            format="hh:mm:ss"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                         onDateChange={(time) => { this.setState({ time: time }) }}
                        />
                    </View>
                    <Button
                        onPress={() => {this.props.create(data), this.props.navigation.navigate("List")}}
                        title="Create"
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {
        task: {}
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("dispatch", dispatch);
    return {
        create: (data) => dispatch(createTask(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
const styles = StyleSheet.create({
    textareaContainer: {
        height: 80,
        backgroundColor: '#F5FCFF',
        width: "95%",
        marginLeft: 10,
        borderRadius: 5
    },
    textarea: {
        textAlignVertical: 'top',  
        height: 80,
        fontSize: 14,
        color: '#333',
    },
});