/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class weatherApp extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Serilingampally, Hyderabad',
      temperature: 23,
      maxTemperature: 40,
      minTemperature: 20
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>
            {this.state.location}
          </Text>
          <Text>
            Last Update: 3pm, IST Yesterday
          </Text>
        </View>
        <View>
          <Text style={styles.currentTemperature}>
            {this.state.temperature}
          </Text>
          <Text>
            min: {this.state.minTemperature}, max: {this.state.maxTemperature}
          </Text>
        </View>
        <Button
          color="#B6627B"
          title="Forecast"
          onPress={ () => {} }
          accessibilityLabel="Click to get the Forecast">
          Something
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5EB9DC',
    padding: 10
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  location: {
    fontSize: 20
  },
  currentTemperature: {
    fontSize: 125
  }
});

AppRegistry.registerComponent('weatherApp', () => weatherApp);
