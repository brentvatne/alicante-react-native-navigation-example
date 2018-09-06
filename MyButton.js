import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

export default class OverlayExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Button!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
