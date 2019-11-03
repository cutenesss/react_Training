import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let {onPressFilter} = this.props;
    return (
      <View style ={styles.container}>
        <Text> MoviesApp </Text>
        <View style = {styles.viewBtn}>
            <TouchableOpacity style={styles.btn}>
                <Icon 
                    name="ios-search" 
                    size={27} 
                    color ='#fff' 
                />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.btn, {marginLeft : 5}]}
              onPress={onPressFilter}
            >
                <MaterialCommunityIcons
                    name="filter-variant"
                    size={27} 
                    color ='#fff'     
                />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingHorizontal: 16,
    },
    viewBtn:{
        flexDirection: 'row',
    },
    title:{
        fontSize:20,
        color:'#fff'
    },
    btn:{
        padding: 5,
    }
});
