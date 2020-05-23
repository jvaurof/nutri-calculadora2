import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icons from 'react-native-vector-icons/AntDesign';

import { clearResult } from '../../../store/modules/calculator/actions';

import {
  Container,
  ResultText,
  Classification,
  IconView
} from './styles';

export default Result = () => {
  const result = useSelector(state => state.calculator.result);
  const classificationColor = useSelector(state => state.calculator.classificationColor);
  const classificationText = useSelector(state => state.calculator.classificationText)
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearResult());
    }
  }, [])

  return (
    <Container>
      <IconView>
        <Icons name="loading1" size={230} color={classificationColor} />
      </IconView>
      <ResultText>{result}</ResultText>
      <Classification>{classificationText}</Classification>
    </Container>);
}
