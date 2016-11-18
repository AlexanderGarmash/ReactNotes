'use strict'

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SimpleButton from './SimpleButton';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.noNotesText}>You haven't created anynotes!</Text>
        <SimpleButton style={styles.simpleButton} 
          textStyle={styles.simpleButtonText} 
          onPress={() => onSimpleButtonClickListener(this)}
          customText='Create Note'/>
      </View>
    );
  }
}

var onSimpleButtonClickListener = (self) => {
  self.props.navigator.push({name: 'createNote'});
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noNotesText: {
    color: '#48209A',
    marginBottom: 10
  },
  simpleButton: {
    backgroundColor: '#5B29C1',
   borderColor: '#48209A',
   borderWidth: 1,
   borderRadius: 4,
   paddingHorizontal: 20,
   paddingVertical: 15,
   shadowColor: 'darkgrey',
   shadowOffset: {
      width: 1,
      height: 1 
   },
   shadowOpacity: 0.8,
   shadowRadius: 1
  },
  simpleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});