/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import RootNav from './App';
import App_TODO from './App_TODO.js';
import { Provider } from "react-redux";
import store from './App TODO/stores/stores';
import index from './src_realm/index';
// const App = () => {
//     return (
//         <Provider
//             store={store}
//         >
//             <App_TODO/>
//         </Provider>
//     )
// }

AppRegistry.registerComponent(appName, () => RootNav);
