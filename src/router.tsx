import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Detail from './pages/Detail';
import Home from './pages/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
