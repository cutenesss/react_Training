import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Button,Alert } from 'react-native';
import { connect } from 'react-redux';
import { createTask } from '../actions/TaskAction';
import Textarea from 'react-native-textarea';
import{ addTask }from '../schemas/Task';

class CreateScreen extends Component {
    constructor(props) {
        super(props);
        this.Task = {
            title:'',
            detail:'',
            uri:''
        };
        // this.title= '';
        // this.detail= '';
        // this.date= "";
        // this.time= "";
    }

    getTime =(time)=>{
        this.time = time
    }

    getDate = (date) =>{
        this.date=date
    }

    getTextTitle = (text)=>{
        this.Task.title=text
    }

    getTextDetail = (text)=>{
        this.Task.detail=text
    }

    getPath = (path)=>{
        this.Task.uri = path
    }

    _onPress= ()=>{
        const{ title, detail}=this.Task;
        if(!title) return alert('empty title');
        if(!detail) return alert('empty detail');
        addTask(this.Task);
        this.props.create(this.Task);
        this.props.navigation.navigate("List");
    }

    render() {
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
                        onChangeText={this.getTextTitle}
                        maxLength={50}
                        placeholder={'Input title'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                    <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, color: 'red' }}>Detail</Text>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={[styles.textarea, { height: 120 }]}
                        onChangeText={this.getTextDetail}
                        maxLength={150}
                        placeholder={'Input Detail'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                    
                    <Button
                        onPress= { this._onPress }
                        title="Create"
                    />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("dispatch", dispatch);
    return {
        create: (data) => dispatch(createTask(data)),
    }
}

export default connect(null, mapDispatchToProps)(CreateScreen);
// export default CreateScreen;
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