import React, { useState, useRef, useCallback } from 'react';
import { Keyboard } from 'react-native';

import { imc, pesoIdeal } from '../../../formulas';

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

const Form = ({ measure1, measure2, result }) => {
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();

  const item1Ref = useRef();
  const item2Ref = useRef();

  const handleResult = useCallback(() => {
    Keyboard.dismiss();

    const numberValue1 = item1Ref.current.getRawValue()
    const numberValue2 = item2Ref.current.getRawValue()

    result(imc(numberValue1, numberValue2));
  }, [item1, item2]);


  return (
    <Container>
      <FormView>
        <MeasureView>
          <Label>{measure1}</Label>
          <Input
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: '',
              suffixUnit: ''
            }}
            value={item1}
            placeholder={'0,00'}
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
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: '',
              suffixUnit: ''
            }}
            value={item2}
            placeholder={'0,00'}
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

export default Form;
