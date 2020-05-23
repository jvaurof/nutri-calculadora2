import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Information from '../../components/Information';
import Result from '../../components/Calculator/Result';
import Form from '../../components/Calculator/Form';

import { Container } from './styles';

const MudancaDoPeso = () => {
  useNavigation().setOptions({
    headerShown: true,
    title: 'Mudança do Peso %',
    headerTitleAlign: 'center',
    headerRight: () => (
      <Information text={''} />
    ),
  });

  return (
    <Container>
      <Result />
      <Form
        measure1="Peso usual - Kg"
        measure2="Peso atual - Kg"
        type="mudancaDoPeso"
      />
    </Container>
  );
}

export default MudancaDoPeso;
