import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { deleteTask } from '../actions/TaskAction';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        console.log("xxx", this.props.task);
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <StatusBar
                    backgroundColor='transparent'
                    barStyle='dark-content'
                />
                <View style={styles.txtHeader}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: '500' }}>List</Text>
                </View>
                <ScrollView>
                    {
                        this.state.task.map(
                            (item, index) => {
                                return (
                                    <View style={styles.taskContainer}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            onPress={() => this.props.navigation.navigate("Detail", {index: index})}
                                            style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                                        >
                                            <View style={{marginLeft:10}} key={index}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 20, color: 'red' }}>Title:</Text>
                                                    <Text style={{marginLeft: 10}}> {item.title}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 20, color: 'red' }}>Date: </Text>
                                                    <Text style={{marginLeft: 10}}> {item.date}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 20, color: 'red' }}>Time: </Text>
                                                    <Text style={{marginLeft: 10}}> {item.time}</Text>
                                                </View>
                                            </View>
                                            <Text style={{color:'red', fontSize:20, marginLeft: 20}}>Detail</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginRight:10}}>
                                            <Icon 
                                                name="ios-add-circle" 
                                                size={30} 
                                                color="#900" 
                                                onPress={()=>this.props.navigation.navigate("UpdateScreen",{index})}
                                            />
                                            <Icon 
                                                name="ios-close-circle" 
                                                size={30} 
                                                color="#900" 
                                                onPress={()=>this.props.delete(index)}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        )
                    }
                </ScrollView>
                <FloatingAction
                    onPressMain={() => this.props.navigation.navigate("CreateScreen")}
                    overlayColor={"rgba(0,0,0,0)"}
                    position={"left"}
                />
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
const mapDispatchToProps = (dispatch) => {
    console.log("dispatch List", dispatch);
    return {
        delete: (index) => dispatch(deleteTask(index)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
const styles = StyleSheet.create({
    txtHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 70
    },
    taskContainer: {
        justifyContent: 'space-between',
        height: 120,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row'
    }
});