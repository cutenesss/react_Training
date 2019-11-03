import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {connect} from "react-redux";

class screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
    {
              this.props.user.map(
                  (item, index)=>{
                      return(
                          <React.Fragment key={index}>
                              <Text> {item.name} </Text>
                              <Text> {item.address} </Text>
                              <Text> {item.DOB} </Text>
                          </React.Fragment>
                      )
                  }
              )
          }
        <Button 
            onPress={()=> this.props.navigation.navigate("screen1")}
            title="Go to screen 1"
        />
      </View>
    );
  }
}


const mapStateToProps = (state) =>{
    console.log("state",state);
    return{
        user: state.UserReducer
    }
}

const mapDispatchToProps= (dispatch)=>{
    console.log("dispatch", dispatch);
    return{
        create:(data)=> dispatch(createUser(data)),
        delete:(data)=>dispatch(deleteUser(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(screen2);
export default screen2;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});