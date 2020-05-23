import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Information from '../../components/Information';
import Result from '../../components/Calculator/Result';
import Form from '../../components/Calculator/Form';

import { Container } from './styles';

const AdequacaoDePeso = () => {
  useNavigation().setOptions({
    headerShown: true,
    title: 'Adequação de Peso',
    headerTitleAlign: 'center',
    headerRight: () => (
      <Information text={''} />
    ),
  });

  return (
    <Container>
      <Result />
      <Form
        measure1="Peso atual - Kg"
        measure2="Peso ideal - Kg"
        type="adequacaoDePeso"
      />
    </Container>
  );
}

export default AdequacaoDePeso;
