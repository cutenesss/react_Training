import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, RefreshControl, ActivityIndicator, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Header from '../components/Header';
import { getListMovie } from '../services/ServiceMovie';
import { typeMovie, url_image } from '../const';
import ModalFilter from '../components/ModalFilter';
import FadeView from '../components/FadeView';
import ModalView from '../components/ModalView';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            items: [],
            isLoadmore: false,
            isLoading: true,
            modalVisible: false,
            indexType : 0,
        };
        this.page = 1;
        this.type = typeMovie[0];
    }
    componentDidMount() {
        getListMovie(this.type, this.page)
            .then(response => response.json())    // convert respense sang json
            .then(res => {               //da convert xong, ket qua la responseJson
                this.setState({
                    items: res.results,
                    isLoading: false
                })
            })
            .catch((error) => {                     // neu co loi thi chay o day
                console.error(error);
            });
    }
    _onRefresh = () => { //bat su kien user muon reload lai data list
        console.log("_onRefresh");
        this.setState({ refreshing: true })
        this.page = 1;
        getListMovie(this.type, this.page)
            .then(response => response.json())    // convert respense sang json
            .then(res => {               //da convert xong, ket qua la responseJson
                this.setState({
                    items: res.results,
                    refreshing: false
                })
            })
            .catch((error) => {                     // neu co loi thi chay o day
                console.error(error);
            });
    }
    _onEndReached = () => { //bat su kien khi user keo list xuong cuoi
        console.log("_onEndReached", this.state.isLoadmore);
        if (this.state.isLoadmore) return;
        this.setState({ isLoadmore: true });
        this.page = this.page + 1;
        getListMovie(this.type, this.page)
            .then(response => response.json())    // convert respense sang json
            .then(res => {               //da convert xong, ket qua la responseJson
                this.setState({
                    items: this.state.items.concat(res.results),
                    isLoadmore: false
                }, () => {
                    console.log("res", this.state.items.length, this.state.isLoadmore)
                })
            })
            .catch((error) => {                     // neu co loi thi chay o day
                console.error(error);
            });
    }
    _renderFooter = () => {//hien thi loading o cuoi list view
        if (this.state.isLoadmore) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator color="#fff" size="large" />
                </View>
            )
        }
        return null;
    }
    _onPressItem = (item) => {//bat su kien click vao item
        console.log("Click item", item);
        this.props.navigation.navigate("DetailMovie", {
            movie_id: item.id
        });
    }
    _renderLoading = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    getMovieByType = (indexType)=>{
        this.type = typeMovie[indexType];
        this.setState({
            refreshing: true
        })
        getListMovie(this.type, this.page)
            .then(response => response.json())//convert response sang json
            .then(res => {//da convert xong , ket qua la responseJson
                console.log("xxxx", res);
                this.setState({
                    items: res.results,
                    refreshing: false
                })
            })
            .catch((e) => {//neu co loi xay ra thi chay vao ham nay
                console.error(e);
            });
    }
    render() {

        return (
            <View style={styles.container}>
                <Header
                    onPressFilter={() => this.ModalView.startAnimation(0)}
                />
                {
                    (this.state.isLoading) ? this._renderLoading() :
                        < View
                            style={{ flex: 1, }}
                        >
                            <FlatGrid
                                itemDimension={130}
                                items={this.state.items}
                                style={styles.gridView}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh}
                                    />
                                }
                                spacing={2}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={styles.item}
                                        onPress={() => this._onPressItem(item)}
                                    >
                                        <Image
                                            source={{ uri: `${url_image}${item.poster_path}` }}
                                            style={{ width: "100%", height: 320 }}
                                            resizeMode="stretch"
                                        />
                                        <View style={styles.viewTitle}>
                                            <Text
                                                style={{ color: "#fff" }}
                                            >{item.original_title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                onEndReachedThreshold={0.5}
                                onEndReached={this._onEndReached}
                                ListFooterComponent={this._renderFooter}
                            />
                        </View>
                }

                <ModalFilter 
                    ref = {ref => this.ModalFilter=ref}
                    onPressSave = {(indexType) =>{
                        this.getMovieByType(indexType);
                    }}
                    typeMovie = {typeMovie}
                />

                {/* <ModalView 
                    ref={ref => this.ModalView=ref}
                >
                    <View style={{backgroundColor:'red', height: 40, width: 40}}>

                    </View>
                </ModalView> */}
            </View>
        );
    }
}
export default Home;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        flex: 1
    },
    item: {
        height: 320,
        backgroundColor: 'red'
    },
    viewTitle: {
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    modal:{
        backgroundColor:'white',
        width:"90%",
        alignSelf:'center',
        marginTop:100,
        borderRadius:4
    },
    txtSort:{
        marginTop:16,
        marginLeft: 16,
        marginBottom: 16,
        fontSize: 20,
         fontWeight: "bold"
    },
    btnSave:{
        backgroundColor:'orange',
        alignItems: 'center',
        justifyContent:'center',
        height: 50
    }
});