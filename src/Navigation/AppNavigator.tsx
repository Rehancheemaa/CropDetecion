import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../app/HomePage';
import Splash from '../app/Splash';
import RiceDisease from '../app/RiceDisease';
import CornDisease from '../app/CornDisease';
import WheatDisease from '../app/WheatDisease';
import RiceHealthyDisease from '../app/RiceHealthyDisease';
import RiceNickBlast from '../app/RiceNickBlast';
import RiceGrayLeafDisease from '../app/RiceGrayLeafDisease';
import CornHealthyDisease from '../app/CronHealthyDisease';
import CornCommonRustDisease from '../app/CornCommonRustDisease';
import CornBlightDisease from '../app/CornBlightDisease';
import CornGrayLeafDisease from '../app/CornGrayLeafDisease';
import WheatHealthyDisease from '../app/WheatHealthyDisease';
import WheatYellowDisease from '../app/WheatYellowDisease';
import WheatBrownDisease from '../app/WheatBrownDisease';
import PredictionScreen from '../app/PredictionScreen';
import CropsScreen from '../app/CropsScreen';
import { AuthProvider } from '../app/AuthContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
        {/* <Stack.Screen name="TodoList" component={TodoList} options={{ headerShown: false }} />
        <Stack.Screen name="TodoEdit" component={TodoEdit} options={{ headerShown: false }} /> */}

          {/* Authentication Screens */}
          {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} /> */}

          {/* Main Screens */}
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="PredictionScreen" component={PredictionScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CropsScreen" component={CropsScreen} options={{ headerShown: false }} />

          {/* Rice disease screens */}
          <Stack.Screen name="RiceDisease" component={RiceDisease} options={{ headerShown: false }} />
          <Stack.Screen name="RiceHealthyDisease" component={RiceHealthyDisease} options={{ headerShown: false }} />
          <Stack.Screen name="RiceNickBlast" component={RiceNickBlast} options={{ headerShown: false }} />
          <Stack.Screen name="RiceGrayLeafDisease" component={RiceGrayLeafDisease} options={{ headerShown: false }} />

          {/* Corn disease screens */}
          <Stack.Screen name="CornDisease" component={CornDisease} options={{ headerShown: false }} />
          <Stack.Screen name="CornHealthyDisease" component={CornHealthyDisease} options={{ headerShown: false }} />
          <Stack.Screen name="CornCommonRustDisease" component={CornCommonRustDisease} options={{ headerShown: false }} />
          <Stack.Screen name="CornBlightDisease" component={CornBlightDisease} options={{ headerShown: false }} />
          <Stack.Screen name="CornGrayLeafDisease" component={CornGrayLeafDisease} options={{ headerShown: false }} />

          {/* Wheat disease screens */}
          <Stack.Screen name="WheatDisease" component={WheatDisease} options={{ headerShown: false }} />
          <Stack.Screen name="WheatHealthyDisease" component={WheatHealthyDisease} options={{ headerShown: false }} />
          <Stack.Screen name="WheatYellowDisease" component={WheatYellowDisease} options={{ headerShown: false }} />
          <Stack.Screen name="WheatBrownDisease" component={WheatBrownDisease} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppNavigator;
