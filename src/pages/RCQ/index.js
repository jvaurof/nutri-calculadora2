import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Information from '../../components/Information';
import Result from '../../components/Calculator/Result';
import Category from '../../components/Calculator/Category';
import Form from '../../components/Calculator/Form';

import { Container } from './styles';

const RCQ = () => {
  useNavigation().setOptions({
    headerShown: true,
    title: 'RCQ',
    headerTitleAlign: 'center',
    headerRight: () => (
      <Information text={''} />
    ),
  });

  return (
    <Container>
      <Result />
      <Category
        category1="Homem"
        category2="Mulher"
      />
      <Form
        measure1="Cintura - cm"
        measure2="Quadril - cm"
        precision1={0}
        precision2={0}
        type="rcq"
      />
    </Container>
  );
}

export default RCQ;
