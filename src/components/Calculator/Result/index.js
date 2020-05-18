import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icons from 'react-native-vector-icons/AntDesign';

import { clearResult } from '../../../store/modules/calculator/actions';

import {
  Container,
  Text,
  SubText,
  IconView
} from './styles';

export default Result = () => {
  const result = useSelector(state => state.calculator.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearResult());
  }, [])

  return (
    <Container>
      <IconView>
        <Icons name="loading1" size={230} color="#fff" />
      </IconView>
      <Text>{result}</Text>
      <SubText></SubText>
    </Container>);
}
