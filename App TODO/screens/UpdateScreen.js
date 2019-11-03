import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateTask } from '../actions/TaskAction';
import {changeTask} from '../schemas/Task';
import Textarea from 'react-native-textarea';

class UpdateScreen extends Component {
  constructor(props) {
    super(props);
    this.Task = this.props.navigation.getParam('item');
    this.i = this.props.navigation.getParam('index');
    this.task ={
      title:this.Task.title,
      detail :this.Task.detail
    }
  }

  getTextTitle = (text) => {
    this.task.title = text
  }

  getTextDetail = (text) => {
    this.task.detail = text
  }


  _onPress =  () => {
    changeTask(this.Task, this.task);
    this.props.update(this.task, this.i);
    this.props.navigation.navigate("List");
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <Text style={{ color: 'white', fontSize: 40, fontWeight: '500', height: 70, alignSelf: 'center'}}>Update</Text>
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text style={{ fontSize: 20, marginLeft: 10, color: 'red' }}>Title</Text>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={this.getTextTitle}
            defaultValue={this.Task.title}
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
            defaultValue={this.Task.detail}
            maxLength={150}
            placeholder={'Input Detail'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
          />
          <Button
            onPress={this._onPress}
            title="Update"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state Update", state);
  return {
    task: state.TaskReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (data, i) => dispatch(updateTask(data, i)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateScreen);
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