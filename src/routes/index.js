import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../pages/Main';

const MainStack = createStackNavigator();

const MainRoutes = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: "#9C27B0"
      },
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: '#9C27B0',
    }}
  >
    <MainStack.Screen
      name="Main"
      component={Main}
    />
  </MainStack.Navigator>
)

export default MainRoutes;
