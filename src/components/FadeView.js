import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

class FadeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: Animated.Value(0),

        };
    }



    componentDidMount() {
        this.startAnimation();
    }

    startAnimation() {
        this.state.fadeAnim.setValue(0);
        const anim1 = Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 500
            }
        );
        const anim2 = Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 500
            }
        );
        Animated.sequence([anim1,anim2]).start();
    }

    render() {
        let {fadeAnim}=this.state;
        return (
            <Animated.View
                style={{
                    ...this.props.style,

                }}
            >

            </Animated.View>
        );
    }
}

export default FadeView;
const styles = StyleSheet.create({

});