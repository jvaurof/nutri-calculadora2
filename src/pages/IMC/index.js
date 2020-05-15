import React, { useState, useCallback, useRef } from 'react';
import { Keyboard } from 'react-native';

import Icons from 'react-native-vector-icons/AntDesign';

import formula from '../../formulas'

import {
  Container,
  IconView,
  ResultView,
  CategoryView,
  FormView,
  SubmitView,
  ResultText,
  ResultSubText,
  CategoryButton,
  CategoryText,
  MeasureView,
  Input,
  Label,
  AnimatableSubmitButton,
  SubmitTextButton
} from './styles';

const IMC = () => {
  const [enabledCategory, setEnabledCategory] = useState({
    category1: false,
    category2: true,
    category3: false,
  });

  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();

  const [result, setResult] = useState(0);

  const item1Ref = useRef();
  const item2Ref = useRef();

  const handleResult = useCallback(() => {
    Keyboard.dismiss();

    const numberValue1 = item1Ref.current.getRawValue()
    const numberValue2 = item2Ref.current.getRawValue()

    setResult(formula({ item1: numberValue1, item2: numberValue2 }, 'imc'));
  }, [item1, item2]);

  return (
    <Container>
      <ResultView>
        <IconView>
          <Icons name="loading1" size={230} color="#fff" />
        </IconView>
        <ResultText>{result}</ResultText>
        <ResultSubText>peso ideal 0,00</ResultSubText>
      </ResultView>

      <CategoryView>
        <CategoryButton
          elevation={enabledCategory.category1 ? 0 : 4}
          onPress={() => setEnabledCategory({
            category1: true,
            category2: false,
            category3: false,
          })}
        >
          <CategoryText>Criança</CategoryText>
        </CategoryButton>

        <CategoryButton
          elevation={enabledCategory.category2 ? 0 : 4}
          onPress={() => setEnabledCategory({
            category1: false,
            category2: true,
            category3: false,
          })}
        >
          <CategoryText>Adulto</CategoryText>
        </CategoryButton>

        <CategoryButton
          elevation={enabledCategory.category3 ? 0 : 4}
          onPress={() => setEnabledCategory({
            category1: false,
            category2: false,
            category3: true,
          })}
        >
          <CategoryText>Idoso</CategoryText>
        </CategoryButton>
      </CategoryView>

      <FormView>
        <MeasureView>
          <Label>Peso - Kg</Label>
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
            ref={item1Ref}
          />
        </MeasureView>

        <MeasureView>
          <Label>Altura - metros</Label>
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

export default IMC;
