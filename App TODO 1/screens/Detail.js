import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Textarea from 'react-native-textarea';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let i = this.props.navigation.state.params.index;
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
              date={this.props.task[i].date}
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
            />
            <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, color: 'red' }}>Time</Text>
            <DatePicker
              style={{ width: 200 }}
              date={this.props.task[i].time}
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
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state List", state);
  return {
      task: state.TaskReducer
  }
}
export default connect(mapStateToProps)(Detail);
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