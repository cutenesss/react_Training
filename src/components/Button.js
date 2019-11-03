import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { nameIcon, onPress, style, colorIcon } = this.props;
    return (
      <TouchableOpacity
        style={[styles.btn, style]}
        onPress={onPress}
      >
        <Ionicons name={nameIcon} size={27} color={colorIcon ? colorIcon : "white"} />
      </TouchableOpacity>
    );
  }
}

export default Button;
const styles = StyleSheet.create({
  btn:{
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});