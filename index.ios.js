import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import Component5 from './app/components/Component5/Component5'
import Component6 from './app/components/Component6/Component6'

export default class myapp extends Component {

  render () {
    return(
        <View>
            <Component5 />
        </View>
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);
