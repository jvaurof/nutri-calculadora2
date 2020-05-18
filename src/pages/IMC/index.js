import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Information from '../../components/Information';
import Result from '../../components/Calculator/Result';
import Category from '../../components/Calculator/Category';
import Form from '../../components/Calculator/Form';

import store from '../../store';
import actions from '../../actions';

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

  /*   useEffect(() => {
      console.log(store.getState());
      store.dispatch(actions.calculateImc('oi'));
    }, []); */

  return (
    <Container>
      <Result />
      <Category />
      <Form
        measure1="Peso - Kg"
        measure2="Altura - metros"
      />
    </Container>
  );
}

export default IMC;
