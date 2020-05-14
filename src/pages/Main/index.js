import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Svg, { Line } from 'react-native-svg';

import MainButton from '../../components/MainButton'

import {
  LineView,
  AnimatableTitle
} from './styles';

const userOptions = [
  {
    id: '1',
    text: 'IMC',
    subText: 'Criança, Adulto e Idoso',
    navigate: 'ImcOptions',
  },
  {
    id: '2',
    text: 'Peso Ideal',
    subText: 'Criança, Adulto e Idoso',
    navigate: 'PesoIdeal',
  },
  {
    id: '3',
    text: 'Peso Ajustado',
    subText: 'Criança, Adulto e Idoso',
    navigate: 'Main',
  },
  {
    id: '4',
    text: 'RCQ',
    subText: 'Criança, Adulto e Idoso',
    navigate: 'Main',
  },
  {
    id: '5',
    text: 'Peso Corrigido',
    subText: 'Criança, Adulto e Idoso',
    navigate: 'Main',
  },
  {
    id: '6',
    text: 'Peso Corrigido',
    subText: 'Criança, Adulto e Idoso',
    navigate: 'Main',
  },
  {
    id: '7',
    text: 'Peso Corrigido',
    subText: 'Criança, Adulto e Idoso',
    navigate: 'Main',
  },
]

const Main = () => {
  const [options] = useState(userOptions);

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
