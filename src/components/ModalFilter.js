import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

class ModalFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            indexType: 0
        };
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.modalVisible != this.state.modalVisible || nextState.indexType != this.state.indexType){
            return true;
        }
        return false;
    }

    render() {
        var {onPressSave, typeMovie} = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.modal}>
                    <Text style={styles.txtSort}>Sort by</Text>
                    {
                        typeMovie.map(
                            (item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            paddingHorizontal: 20,
                                            paddingVertical: 10,
                                            flexDirection: 'row'
                                        }}
                                        onPress={() => this.setState({
                                            indexType: index
                                        })}
                                    >
                                        {(this.state.indexType == index) ?
                                            <Icons
                                                name="dot-circle-o"
                                                color="orange"
                                                size={27}
                                            /> :
                                            <Icons name="circle-o" color="orange" size={27} />
                                        }
                                        <Text style = {{marginLeft: 16}}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                    }
                    <TouchableOpacity
                        style={styles.btnSave}
                        onPress = {()=>{
                            this.setModalVisible(false);
                            onPressSave && onPressSave(this.state.indexType);
                        }}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default ModalFilter;
const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        width: "90%",
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 4
    },
    txtSort: {
        marginTop: 16,
        marginLeft: 16,
        marginBottom: 16,
        fontSize: 20,
        fontWeight: "bold"
    },
    btnSave: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    }
});