import React from 'react';

import Icons from 'react-native-vector-icons/AntDesign';

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
  return (
    <>
      <Container>
        <ResultView>
          <IconView>
            <Icons name="loading1" size={230} color="#fff" />
          </IconView>
          <ResultText>25</ResultText>
          <ResultSubText>peso ideal 30,78</ResultSubText>
        </ResultView>

        <CategoryView>
          <CategoryButton elevation={4}>
            <CategoryText>Criança</CategoryText>
          </CategoryButton>

          <CategoryButton >
            <CategoryText>Adulto</CategoryText>
          </CategoryButton>

          <CategoryButton elevation={4}>
            <CategoryText>Idoso</CategoryText>
          </CategoryButton>
        </CategoryView>

        <FormView>
          <MeasureView>
            <Label>Peso - Kg</Label>
            <Input
              type={'money'}
              options={{
                precision: 0,
                separator: ',',
                delimiter: '.',
                unit: '',
                suffixUnit: ''
              }}

              placeholder={'0,00'}
              onChangeText={() => { }}
            />
          </MeasureView>

          <MeasureView>
            <Label>Altura - metros</Label>
            <Input
              type={'money'}
              options={{
                precision: 0,
                separator: ',',
                delimiter: '.',
                unit: '',
                suffixUnit: ''
              }}

              placeholder={'0,00'}
              onChangeText={() => { }}
            />
          </MeasureView>

        </FormView>

        <SubmitView>
          <AnimatableSubmitButton
            elevation={4}
            animation="pulse"
            useNativeDriver
            iterationCount={Infinity}
          >
            <SubmitTextButton>Calcular</SubmitTextButton>
          </AnimatableSubmitButton>
        </SubmitView>
      </Container>
    </>
  );
}

export default IMC;

/*       <Text>25</Text>
<SubText>peso ideal 30,78</SubText>
<PersonTypeView>
  <PersonTypeButton elevation={4}>
    <PersonTypeText>
      Criança
    </PersonTypeText>
  </PersonTypeButton>
  <PersonTypeButton elevation={0}>
    <PersonTypeText>
      Adulto
    </PersonTypeText>
  </PersonTypeButton>
  <PersonTypeButton elevation={4}>
    <PersonTypeText>
      Idoso
    </PersonTypeText>
  </PersonTypeButton>
</PersonTypeView>

<LabelView>
  <InputLabel>Peso - Kg</InputLabel>
  <InputLabel>Altura - metros</InputLabel>
</LabelView>

<InputView>
  <Input
    type={'money'}
    options={{
      precision: 0,
      separator: ',',
      delimiter: '.',
      unit: '',
      suffixUnit: ''
    }}

    placeholder={'0,00'}
    onChangeText={() => { }}
  />

  <Input
    type={'money'}
    options={{
      precision: 0,
      separator: ',',
      delimiter: '.',
      unit: '',
      suffixUnit: ''
    }}

    placeholder={'0,00'}
    onChangeText={() => { }}
  />
</InputView>

<SubmitView>
  <SubmitButton elevation={4}>
    <SubmitTextButton>
      Calcular
  </SubmitTextButton>
  </SubmitButton>
</SubmitView> */
