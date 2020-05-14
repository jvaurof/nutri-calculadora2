import React, { useState } from 'react';
import { FlatList } from 'react-native';

import MainButton from '../../components/MainButton'

import {
  Container,
  Title,
  List
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
]

const Main = () => {
  const [options] = useState(userOptions);

  return (
    <>
      <Title>Calculadora Nutricional</Title>
      <FlatList
        data={options}
        keyExtractor={option => option.id}
        renderItem={({ item: option }) => (
          <MainButton
            text={option.text}
            subText={option.subText}
          />
        )}
      />

    </>
  );
}

export default Main;
