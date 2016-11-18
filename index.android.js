/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import NoteScreen from './app/component/common/NoteScreen';
import HomeScreen from './app/component/common/HomeScreen';
import SimpleButton from './app/component/common/SimpleButton';
import NavigationBarRouteMapper from './app/common/NavigationBarRouteMapper';

export default class ReactNotes extends Component {
  renderScene (route, navigator) {
      switch (route.name) {
         case 'home':
           return (
             <HomeScreen navigator={navigator} />
           );
         case 'createNote':
           return (
               <NoteScreen />
           );
      }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            /> 
        }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);