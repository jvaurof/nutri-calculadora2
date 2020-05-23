import React, { useState, useRef, useCallback } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import { calculator } from '../../../store/modules/calculator/actions';

import {
  Container,
  FormView,
  SubmitView,
  MeasureView,
  Input,
  Label,
  AnimatableSubmitButton,
  SubmitTextButton
} from './styles';

export default Form = ({
  measure1,
  measure2,
  precision1 = 2,
  precision2 = 2,
  type
}) => {
  const [item1, setItem1] = useState('0,00');
  const [item2, setItem2] = useState('0,00');

  const item1Ref = useRef();
  const item2Ref = useRef();

  const dispatch = useDispatch();

  const handleResult = useCallback(() => {
    Keyboard.dismiss();

    const numberValue1 = item1Ref.current.getRawValue();
    const numberValue2 = item2Ref.current.getRawValue();

    const measures = {
      item1: numberValue1,
      item2: numberValue2,
    };

    dispatch(calculator(measures, type));
  }, [item1, item2]);

  return (
    <Container>
      <FormView>
        <MeasureView>
          <Label>{measure1}</Label>
          <Input
            type={'money'}
            options={{
              precision: precision1,
              separator: ',',
              delimiter: '.',
              unit: '',
              suffixUnit: ''
            }}
            value={item1}
            onChangeText={text => { setItem1(text) }}
            returnKeyType='next'
            ref={item1Ref}
          />
        </MeasureView>

        <MeasureView>
          <Label>{measure2}</Label>
          <Input
            type={'money'}
            options={{
              precision: precision2,
              separator: ',',
              delimiter: '.',
              unit: '',
              suffixUnit: ''
            }}
            value={item2}
            onChangeText={text => setItem2(text)}
            onSubmitEditing={handleResult}
            returnKeyType='done'
            ref={item2Ref}
          />
        </MeasureView>
      </FormView>

      <SubmitView>
        <AnimatableSubmitButton
          elevation={4}
          animation="pulse"
          useNativeDriver
          iterationCount={Infinity}
          onPress={handleResult}
        >
          <SubmitTextButton>Calcular</SubmitTextButton>
        </AnimatableSubmitButton>
      </SubmitView>
    </Container>
  );
}
