import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class SecondScreen extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Screen 2',
        },
      },
      bottomTab: {
        text: 'Tab 2',
        icon: require('./assets/question-circle.png'),
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Greetings from the second screen!</Text>
        <Button
          title="Go to first"
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'example.FirstScreen',
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
