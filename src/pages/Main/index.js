import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import MainButton from '../../components/MainButton'

import { USER_OPTIONS } from '../../constants';

import {
  LineView,
  AnimatableTitle
} from './styles';

const Main = () => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerShown: false,
  });

  const [options] = useState(USER_OPTIONS.MAIN_BUTTON);

  return (
    <>
      <AnimatableTitle
        animation="fadeIn"
        duration={3000}
        useNativeDriver
        iterationCount={1}
      >
        {'Calculadora\nNutricional'}
      </AnimatableTitle>
      <FlatList
        data={options}
        keyExtractor={option => option.id}
        renderItem={({ item: option }) => {
          const animation = option.id % 2 == 0 ? 'bounceInLeft' : 'bounceInRight';

          return (
            <MainButton
              text={option.text}
              subText={option.subText}
              animation={animation}
              onPress={() => navigation.navigate(option.navigate)}
            />)
        }}
      />
      <LineView >
        <Svg height="1000" width="60">
          <Line x1="56" y1="0" x2="56" y2="1000" stroke="#fff" strokeWidth="1" />
        </Svg>
      </LineView>
    </>
  );
}

export default Main;
