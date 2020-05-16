import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Information from '../../components/Information';
import Result from '../../components/Calculator/Result';
import Category from '../../components/Calculator/Category';
import Form from '../../components/Calculator/Form';

import { Container } from './styles';

const IMC = () => {
  useNavigation().setOptions({
    title: 'IMC',
    headerShown: true,
    headerRight: () => (
      <Information text={`Peso ideal\nIMC Adulto: X\nIMC Idoso: Y`} />
    ),
  });

  const [result, setResult] = useState(0);

  return (
    <Container>
      <Result value1={result} />
      <Category />
      <Form
        measure1="Peso - Kg"
        measure2="Altura - metros"
        result={setResult}
      />
    </Container>
  );
}

export default IMC;
