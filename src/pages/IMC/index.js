import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Information from '../../components/Information';
import Result from '../../components/Calculator/Result';
import Category from '../../components/Calculator/Category';
import Form from '../../components/Calculator/Form';

import { Container } from './styles';

const IMC = () => {
  useNavigation().setOptions({
    headerShown: true,
    title: 'IMC',
    headerTitleAlign: 'center',
    headerRight: () => (
      <Information text={`Peso ideal\nIMC Adulto: X\nIMC Idoso: Y`} />
    ),
  });

  return (
    <Container>
      <Result />
      <Category
        category1="Criança"
        category2="Adulto"
        category3="Idoso"
      />
      <Form
        measure1="Peso - Kg"
        measure2="Altura - metros"
        type="imc"
      />
    </Container>
  );
}

export default IMC;
