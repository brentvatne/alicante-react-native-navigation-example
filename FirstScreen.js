import React, { Component } from 'react';
import {
  Button,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class FirstScreen extends Component {
  static options(passProps) {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'myButton',
            component: {
              name: 'example.MyButton',
            },
          },
        ],
        title: {
          text: 'Screen 1',
        },
      },
      bottomTab: {
        text: 'Tab 1',
        icon: require('./assets/check-circle.png'),
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

  handlePreviewPressIn = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'example.SecondScreen',
        options: {
          preview: {
            elementId: 'PreviewElement',
            height: 300,
            commit: true,
            actions: [
              {
                id: 'action-cancel',
                title: 'Cancel',
              },
              {
                id: 'action-delete',
                title: 'Delete',
                actions: [
                  {
                    id: 'action-delete-sure',
                    title: 'Are you sure?',
                    style: 'destructive',
                  },
                ],
              },
            ],
          },
        },
      },
    });
  };

  handlePreviewPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'example.SecondScreen',
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello from the first screen!</Text>
        <Navigation.Element elementId="PreviewElement">
          <TouchableOpacity
            onPressIn={this.handlePreviewPressIn}
            onPress={this.handlePreviewPress}>
            <Text
              style={{
                fontSize: 18,
                color: 'red',
                marginBottom: 8,
                marginTop: 5,
              }}>
              Show preview
            </Text>
          </TouchableOpacity>
        </Navigation.Element>
        <Button
          title="Show a warning"
          onPress={() => console.warn('This is a warning!')}
        />
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
