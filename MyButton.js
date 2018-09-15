import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

export default class OverlayExample extends Component {
  render() {
    return <Button title="Button!" onPress={() => alert('Hello!')} />;
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
  },
});
