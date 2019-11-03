import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Textarea from 'react-native-textarea';
import { connect } from 'react-redux';  

class Detail extends Component {
  constructor(props) {
    super(props);
    this.Task = this.props.navigation.getParam('item');
  }

  render() {
    console.log(this.Task)
    return (
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <Text style={{ color: 'white', fontSize: 40, fontWeight: '500', alignSelf: 'center', height: 70}}>Detail</Text>
        <View style={{ flex: 1, justifyContent: 'center',  }}>
          <Text style={{ fontSize: 20, marginLeft: 10, color: 'red' }}>Title</Text>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
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
            defaultValue={this.Task.detail}
            maxLength={150}
            placeholder={'Input Detail'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
          />
        </View>
      </View>
    );
  }
}
export default Detail;
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