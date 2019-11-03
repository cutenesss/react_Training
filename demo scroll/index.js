import React, { Component } from 'react';
import { View,Text, Dimensions, StyleSheet, Image, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth * 75/100;
const itemHeight= 200;


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0
    };
    }

    onSnapToItem=(index)=>{
        this.setState({index:index})
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        height: itemHeight,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={ENTRIES1}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        onSnapToItem ={this.onSnapToItem}
                        enableMomentum={true}
                    />
                    
                </View>
                <Text>{ENTRIES1[this.state.index].title} {this.state.index}</Text>
            </View>
        );
    }
    _renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View
                style={{
                    backgroundColor:'red',
                    width:itemWidth,
                    height:itemHeight
                }}
            >
                <Image
                    source={{ uri: item.illustration }}
                    style={{
                        width:"100%",
                        height:"100%"
                    }}
                />
            </View>
        )
    }
}

export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];


export default index;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});