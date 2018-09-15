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
      },
      // animations: {
      //   push: {
      //     topBar: {
      //       alpha: {
      //         from: 0,
      //         to: 1,
      //         duration: 250,
      //       },
      //     },
      //   },
      //   pop: {
      //     content: {
      //       alpha: {
      //         from: 1,
      //         to: 0,
      //         duration: 250,
      //       },
      //     },
      //     topBar: {
      //       alpha: {
      //         from: 1,
      //         to: 0,
      //         duration: 250,
      //       },
      //     },
      //   },
      // },
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
        <Button
          title="Pop"
          onPress={() => {
            Navigation.pop(this.props.componentId);
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
