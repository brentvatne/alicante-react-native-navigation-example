import { Navigation } from 'react-native-navigation';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import MyButton from './MyButton';

Navigation.registerComponent(`example.FirstScreen`, () => FirstScreen);
Navigation.registerComponent(`example.SecondScreen`, () => SecondScreen);
Navigation.registerComponent(`example.MyButton`, () => MyButton);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    bottomTab: {
      textColor: '#929292',
      iconColor: '#929292',
      selectedTextColor: '#3478f6',
      selectedIconColor: '#3478f6',
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'example.FirstScreen',
                  },
                },
              ],
              options: {
                animations: {
                  push: {
                    content: {
                      alpha: {
                        from: 0,
                        to: 1,
                        duration: 250,
                      },
                    },
                  },
                  pop: {
                    content: {
                      alpha: {
                        from: 1,
                        to: 0,
                        duration: 250,
                      },
                    },
                  },
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'example.SecondScreen',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
