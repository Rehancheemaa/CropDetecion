/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppNavigator from './src/Navigation/AppNavigator';

// Register the main component
AppRegistry.registerComponent(appName, () => AppNavigator);