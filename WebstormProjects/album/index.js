import { AppRegistry } from 'react-native';
import  React from 'react';
import Header from './src/component/header'
const App = () =>

    (
        <Header/>
    );


AppRegistry.registerComponent('album', () => App);
