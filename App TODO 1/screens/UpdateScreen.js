import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateTask } from '../actions/TaskAction';
import Textarea from 'react-native-textarea';
import DatePicker from 'react-native-datepicker';

class UpdateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      detail: '',
      date: "",
      time: ""
    };
  }

  render() {
    let i = this.props.navigation.state.params.index;
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
          <Text style={{ color: 'white', fontSize: 40, fontWeight: '500' }}>Update</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'gray' }}>
          <Text style={{ fontSize: 20, marginLeft: 10, color: 'red' }}>Title</Text>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={(text) => this.setState({ title: text })}
            defaultValue={this.props.task[i].title}
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
            defaultValue={this.props.task[i].detail}
            maxLength={150}
            placeholder={'Input Detail'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
          />
          <View style={{ height: 200, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, color: 'red' }}>Date</Text>
            <DatePicker
              style={{ width: 200 }}
              date={(this.state.date == "") ? this.props.task[i].date : this.state.date}
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
              date={(this.state.time == "") ? this.props.task[i].time : this.state.time}
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
            onPress={() => {
              data.title = (this.state.title == "") ? this.props.task[i].title : this.state.title,
              data.detail = (this.state.detail == "") ? this.props.task[i].detail : this.state.detail,
              data.date = (this.state.date == "") ? this.props.task[i].date : this.state.date,
              data.time = (this.state.time == "") ? this.props.task[i].time : this.state.time,
              console.log(data, i),
              this.props.update(data, i), 
              this.props.navigation.navigate("List") 
            }}
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