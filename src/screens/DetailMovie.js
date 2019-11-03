import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import { getDetailMovie, getReview, getRecommendation } from '../services/ServiceMovie';
import { url_image } from '../const';

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: {},
      reviews: [],
      recommendation: []
    };
    this.page = 1;
  }

  componentDidMount() {
    let movie_id = this.props.navigation.state.params.movie_id;
    getDetailMovie(movie_id)
      .then(response => response.json())    // convert respense sang json
      .then(res => {               //da convert xong, ket qua la responseJson
        this.setState({
          movie: res,
          isLoading: false
        })
      })
      .catch((error) => {                     // neu co loi thi chay o day
        console.error(error);
      });
    getReview(movie_id, this.page)
      .then(response => response.json())    // convert respense sang json
      .then(res => {               //da convert xong, ket qua la responseJson
        this.setState({
          reviews: res.results,
        })
      })
      .catch((error) => {                     // neu co loi thi chay o day
        console.error(error);
      });
    getRecommendation(movie_id, this.page)
      .then(response => response.json())    // convert respense sang json
      .then(res => {               //da convert xong, ket qua la responseJson
        this.setState({
          recommendation: res.results,
        })
      })
      .catch((error) => {                     // neu co loi thi chay o day
        console.error(error);
      });
  }

  _renderLoading = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }

  componentWillReceiveProps(NextProps) {
    let movie_id = NextProps.navigation.state.params.movie_id;
    getDetailMovie(movie_id)
      .then(response => response.json())    // convert respense sang json
      .then(res => {               //da convert xong, ket qua la responseJson
        this.setState({
          movie: res,
          isLoading: false
        })
      })
      .catch((error) => {                     // neu co loi thi chay o day
        console.error(error);
      });
    getReview(movie_id, this.page)
      .then(response => response.json())    // convert respense sang json
      .then(res => {               //da convert xong, ket qua la responseJson
        this.setState({
          reviews: res.results,
        })
      })
      .catch((error) => {                     // neu co loi thi chay o day
        console.error(error);
      });
    getRecommendation(movie_id, this.page)
      .then(response => response.json())    // convert respense sang json
      .then(res => {               //da convert xong, ket qua la responseJson
        this.setState({
          recommendation: res.results,
        })
      })
      .catch((error) => {                     // neu co loi thi chay o day
        console.error(error);
      });
  }

  _onPressItem = (item) => {//bat su kien click vao item
    console.log("Click item", item);
    this.props.navigation.navigate("DetailMovie", {
      movie_id: item.id
    });
  }

  render() {
    let { movie, reviews, recommendation } = this.state;
    return (
      <View style={{ flex: 1 }}> 
        <ScrollView
          ref='ScrollView'
          onContentSizeChange={() => { this.refs.ScrollView.scrollTo({ x: 0, y: 0, animated: true }) }}
        >
          <View style={styles.container}>
            {
              this.state.isLoading ? this._renderLoading() :
                <View style={styles.container}>
                  <Image source={{ uri: `${url_image}${movie.backdrop_path}` }} style={{ width: "100%", height: 300 }} />
                  <Text style={styles.title_txt}>
                    {movie.original_title}
                  </Text>
                  <Text style={styles.detail_txt}>
                    Release Date: {movie.release_date}
                  </Text>
                  <Text style={styles.detail_txt}>
                    Genres:
                  </Text>

                  <View style={{ flexDirection: 'row', flex: 1, width: "100%" }}>
                    <Text style={styles.detail_txt}>Genres:</Text>
                      {
                        movie.genres.map(
                          (item, index) => {
                            return (
                              <View key={index}>
                                <Text style={{ color: 'white', fontSize: 15 }} > {item.name}, </Text>
                              </View>
                            )
                          }
                        )
                      }
                  </View>

                  <Text style={{ color: 'white', fontSize: 25, marginLeft: 10, }}>Summary</Text>

                  <View style={{ flexDirection: 'column', flex: 1, width: "100%" }}>
                    {
                      reviews.map(
                        (item, index) => {
                          return (
                            <View key={index}>
                              <Text style={{ color: 'black', fontSize: 30 }}> Author: {item.author} </Text>
                              <Text style={{ color: 'white', fontSize: 10 }}> Review: {item.content} </Text>
                            </View>
                          )
                        }
                      )
                    }
                  </View>

                  <Text style={{ color: 'white', fontSize: 25, marginLeft: 10, }}> Recommendation </Text>
                  <View style={{ height: 240, width: "100%" }}>
                    <ScrollView horizontal={true}>
                      {
                        recommendation.map(
                          (item, index) => {
                            return (
                              <TouchableOpacity
                                style={{ backgroundColor: 'red' }}
                                onPress={() => this._onPressItem(item)}
                              >
                                <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center' }} key={index}>
                                  <Image source={{ uri: `${url_image}${item.poster_path}` }} style={{ width: 150, height: 200 }} />
                                  <Text
                                    style={{ color: "#fff", }}
                                  >{item.title}</Text>
                                </View>
                              </TouchableOpacity>
                            )
                          }
                        )
                      }
                    </ScrollView>
                  </View>
                </View>
            }
          </View>
        </ScrollView>
                              
        <TouchableOpacity
            onPress={()=> this.props.navigation.goBack()}
            style={{position: 'absolute', height: 50, width: "100%", backgroundColor: 'rgba(0,0,0,0)', }}
          >
            <Text>Back</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default DetailMovie;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1
  },
  title_txt: {
    color: 'white',
    fontSize: 40,
    marginLeft: 10,
  },
  detail_txt: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
  }
});


//AIzaSyCKiiYdnnm34B1rCdLdo14ThPaI-A9sJ4E