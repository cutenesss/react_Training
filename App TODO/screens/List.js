// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
// import { FloatingAction } from "react-native-floating-action";
// import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { saveTask, deleteTask } from '../actions/TaskAction';
// import { getAllTask, removeTask } from '../schemas/Task';
// import Realm from 'realm';

// class List extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     };

//     _setData = async () => {
//         const _data = await getAllTask();
//         this.props.save(_data);
//     }

//     _onPress = () => {
//         this.props.navigation.navigate("CreateScreen")
//     }

//     componentDidMount = () => {
//         this._setData();
//     }

//     goToDetail = (item) => {
//         this.props.navigation.navigate("Detail", { item: item })
//     }

//     goToUpdate = (item, index) => {
//         this.props.navigation.navigate("UpdateScreen", { item: item, index: index })
//     }

//     onPressDelete = (item, index) => {
//         console.log("index", index)
//         this.props.delete(index);
//         removeTask(item);
//     }
// //xoa = index redux + xoa = item realm
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: 'gray' }}>
//                 <StatusBar
//                     backgroundColor='transparent'
//                     barStyle='dark-content'
//                 />
//                 <Text style={{ color: 'white', fontSize: 40, fontWeight: '500', alignSelf: 'center', height: 70 }}>List</Text>
//                 <ScrollView>
//                     {
//                         this.props.task.map(
//                             (item, index) => {
//                                 return (
//                                     <View style={styles.taskContainer} key={index}>
//                                         <TouchableOpacity
//                                             activeOpacity={1}
//                                             onPress={() => this.goToDetail(item)}
//                                             style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
//                                         >
//                                             <View style={{ marginLeft: 10 }}>
//                                                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                                     <Text style={{ fontSize: 20, color: 'red' }}>Title:</Text>
//                                                     <Text style={{ marginLeft: 10 }}> {item.title}</Text>
//                                                 </View>

//                                             </View>
//                                             <Text style={{ color: 'red', fontSize: 20, marginLeft: 20 }}>Detail</Text>
//                                         </TouchableOpacity>
//                                         <TouchableOpacity style={{ marginRight: 10 }}>
//                                             <Icon
//                                                 name="ios-add-circle"
//                                                 size={30}
//                                                 color="#900"
//                                                 onPress={() => this.goToUpdate(item, index)}
//                                             />
//                                             <Icon
//                                                 name="ios-close-circle"
//                                                 size={30}
//                                                 color="#900"
//                                                 onPress={() => this.onPressDelete(item, index)}
//                                             />
//                                         </TouchableOpacity>
//                                     </View>
//                                 )
//                             }
//                         )
//                     }
//                 </ScrollView>
//                 <FloatingAction
//                     onPressMain={this._onPress}
//                     overlayColor={"rgba(0,0,0,0)"}
//                     position={"left"}
//                 />
//             </View>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     console.log("state List", state);
//     return {
//         task: state.TaskReducer
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     console.log("dispatch List", dispatch);
//     return {
//         save: (data) => dispatch(saveTask(data)),
//         delete: (index) => dispatch(deleteTask(index)),
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(List);
// const styles = StyleSheet.create({
//     txtHeader: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'blue',
//         height: 70
//     },
//     taskContainer: {
//         justifyContent: 'space-between',
//         height: 120,
//         marginLeft: 20,
//         marginRight: 20,
//         marginTop: 10,
//         marginBottom: 10,
//         borderRadius: 5,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         flexDirection: 'row'
//     }
// });