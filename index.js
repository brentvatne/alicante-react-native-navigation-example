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
      selectedTextColor: 'blue',
      selectedIconColor: 'blue',
    }
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
