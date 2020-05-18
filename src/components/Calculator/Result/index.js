import React from 'react';
import { connect } from 'react-redux';

import Icons from 'react-native-vector-icons/AntDesign';

import { Container, Text, SubText, IconView } from './styles';

const Result = ({ result }) => {
  return (
    <Container>
      <IconView>
        <Icons name="loading1" size={230} color="#fff" />
      </IconView>
      <Text>{result}</Text>
      <SubText></SubText>
    </Container>);
}

export default connect(state => ({
  result: state.calculator.result
}))(Result);
