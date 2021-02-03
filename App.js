import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";
import ScreenComponents from './src/screens/ScreenComponents';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreenReducer from './src/screens/SquareScreenReducer';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ScreenComponents,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    // Square: SquareScreen,
    SquareReducer: SquareScreenReducer,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "DemoApp"
    }
  }
);

export default createAppContainer(navigator);
