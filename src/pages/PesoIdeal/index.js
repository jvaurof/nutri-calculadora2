import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Information from '../../components/Information';
import Result from '../../components/Calculator/Result';
import Form from '../../components/Calculator/Form';

import { Container } from './styles';

const PesoIdeal = () => {
  useNavigation().setOptions({
    headerShown: true,
    title: 'Peso Ideal',
    headerTitleAlign: 'center',
    headerRight: () => (
      <Information text={'IMC médio\n\nHomem: 22\nMulher: 20,80\nIdoso: 24,50'} />
    ),
  });

  return (
    <Container>
      <Result />
      <Form
        measure1="IMC desejado"
        measure2="Altura - metros"
        type="pesoIdeal"
      />
    </Container>
  );
}

export default PesoIdeal;
