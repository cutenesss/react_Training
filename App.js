import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import Home from './src/screens/Home';
import DetailMovie from './src/screens/DetailMovie';

const RootNav = createStackNavigator({
  Home: {
      screen: Home
  },
  DetailMovie: {
      screen: DetailMovie
  }
}, {
      headerMode: "none"
  });

export default createAppContainer(RootNav);