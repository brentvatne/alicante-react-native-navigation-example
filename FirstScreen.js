import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class FirstScreen extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Screen 1',
        },
      },
      bottomTab: {
        text: 'Tab 1',
        icon: require('./assets/check-circle.png'),
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello from the first screen!</Text>
        <Button
          title="Go to second"
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'example.SecondScreen',
              },
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
