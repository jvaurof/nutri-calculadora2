import React from 'react'
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../pages/Main';
import IMC from '../pages/IMC';
import PesoIdeal from '../pages/PesoIdeal';
import RCQ from '../pages/RCQ';

const MainStack = createStackNavigator();

const MainRoutes = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#9C27B0" />
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: "#9C27B0"
        },
        headerStyle: {
          backgroundColor: "#9C27B0"
        },
        headerTintColor: '#fff',
      }}
    >
      <MainStack.Screen
        name="Main"
        component={Main}
      />

      <MainStack.Screen
        name="IMC"
        component={IMC}
      />

      <MainStack.Screen
        name="PesoIdeal"
        component={PesoIdeal}
      />

      <MainStack.Screen
        name="RCQ"
        component={RCQ}
      />
    </MainStack.Navigator>
  </>
)

export default MainRoutes;
