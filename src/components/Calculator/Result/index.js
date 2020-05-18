import React from 'react';
import { useSelector } from 'react-redux';

import Icons from 'react-native-vector-icons/AntDesign';

import { Container, Text, SubText, IconView } from './styles';

export default Result = () => {
  const result = useSelector(state => state.calculator.result);

  return (
    <Container>
      <IconView>
        <Icons name="loading1" size={230} color="#fff" />
      </IconView>
      <Text>{result}</Text>
      <SubText></SubText>
    </Container>);
}
