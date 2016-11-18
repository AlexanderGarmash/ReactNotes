'use strict'

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class SimpleButton extends Component {
  render() {
    return(
      <View style={this.props.style}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={this.props.textStyle}>
            {this.props.customText || 'Simple Button'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

SimpleButton.propTypes = {
   onPress: React.PropTypes.func.isRequired,
   customText: React.PropTypes.string,
   style: View.propTypes.style,
   textStyle: Text.propTypes.style
};