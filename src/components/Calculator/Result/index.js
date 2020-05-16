import React from 'react';

import Icons from 'react-native-vector-icons/AntDesign';

import { Container, Text, SubText, IconView } from './styles';

const Result = ({ value1, value2 }) => {
  return (
    <Container>
      <IconView>
        <Icons name="loading1" size={230} color="#fff" />
      </IconView>
      <Text>{value1}</Text>
      <SubText>{value2}</SubText>
    </Container>);
}

export default Result;
