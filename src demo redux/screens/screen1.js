import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {createUser, deleteUser} from '../actions/UserAction';

class screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("xxx", this.props.user);
    const {name, address, DOB} = this.props.user;
    const data={
        name :'Nam',
        address: 'DN',
        DOB: '13/15/215'
    }
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
            onPress={()=> this.props.create(data)}
            title="create"
        />
        <Button 
            onPress={()=> this.props.delete(data)}
            title="delete"
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

export default connect(mapStateToProps, mapDispatchToProps)(screen1);
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
