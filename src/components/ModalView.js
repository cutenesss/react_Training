import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';
const width = Dimensions.get("window").width;  //get width cua device
const height = Dimensions.get("window").height;  //get height cua device
class ModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom: new Animated.Value(-height)
        };
    }

    startAnimation(toValue) {
        const anim1 = Animated.timing(
            this.state.bottom,
            {
                toValue: toValue,
                duration: 500
            }
        ).start();
    }

    render() {
        return (
      
                <Animated.View
                    style={[
                        styles.container,
                        { bottom: this.state.bottom }
                    ]}
                >
                    <View
                        style={styles.content}
                    >
                        {this.props.children}
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress ={()=>this.startAnimation(-height)}
                    />
                </Animated.View>
        
        );
    }
}

export default ModalView;
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0)',
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'yellow',
        zIndex: 1
    },
    btn:{
        position:'absolute',
        width: width,
        height: height,
        zIndex:0,
    }
});