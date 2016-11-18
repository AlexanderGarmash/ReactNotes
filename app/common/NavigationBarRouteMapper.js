import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import SimpleButton from '../component/common/SimpleButton';

var NavigationBarRouteMapper = {
     LeftButton: function(route, navigator, index, navState) {
       switch(route.name){
         case 'createNote':{
           return (
             <SimpleButton
               onPress={() => navigator.pop()}
               customText='Back'
               />
           );
         }
         default:
           return null;
       }
     },
     RightButton: function(route, navigator, index, navState) {
       switch(route.name){
         case 'home':
           return (
             <SimpleButton
               onPress={() => {
                 navigator.push({
                   name: 'createNote'
                 });
               }}
               customText='Create Note'
               />
           );
         default:
           return null;
       }
     },
     Title: function(route, navigator, index, navState) {
       switch(route.name){
         case 'home':
           return (
             <Text>React Notes</Text>
           );
         case 'createNote':
           return (
             <Text>Create Note</Text>
           );
       }
     }
};

module.exports = NavigationBarRouteMapper;