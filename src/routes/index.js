import React from 'react'
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import Pages from '../pages';

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
        component={Pages.Main}
      />

      <MainStack.Screen
        name="IMC"
        component={Pages.IMC}
      />

      <MainStack.Screen
        name="PesoIdeal"
        component={Pages.PesoIdeal}
      />

      <MainStack.Screen
        name="RCQ"
        component={Pages.RCQ}
      />

      <MainStack.Screen
        name="AlturaEstimada"
        component={Pages.AlturaEstimada}
      />

      <MainStack.Screen
        name="AdequacaoDePeso"
        component={Pages.AdequacaoDePeso}
      />

      <MainStack.Screen
        name="MudancaDoPeso"
        component={Pages.MudancaDoPeso}
      />
    </MainStack.Navigator>
  </>
)

export default MainRoutes;
