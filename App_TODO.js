import {createAppContainer, createStackNavigator} from 'react-navigation';
import List from './App TODO/screens/List';
import UpdateScreen from './App TODO/screens/UpdateScreen';
import Detail from './App TODO/screens/Detail';
import CreateScreen from './App TODO/screens/CreateScreen';

const RootNav = createStackNavigator({
    List:{
        screen: List
    },
    UpdateScreen:{
        screen: UpdateScreen
    },
    Detail:{
        screen: Detail
    },
    CreateScreen:{
        screen: CreateScreen
    },
},{
    headerMode:"none",
});

export default createAppContainer(RootNav);