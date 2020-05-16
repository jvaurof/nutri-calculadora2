import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 2;
`;

export const FormView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const SubmitView = styled.View`
  flex: 1;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const MeasureView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Label = styled.Text`
  color: #fff;
  padding-left: 4px;
`;

export const Input = styled(TextInputMask).attrs({
  placeholderTextColor: '#fff'
})`
  font-size: 25px;
  color: #fff;
  width: 70%;
  text-align: center;
`;

const SubmitButton = styled(RectButton)`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background: #AB47BC;
  justify-content: center;
`;

export const AnimatableSubmitButton = Animatable.createAnimatableComponent(SubmitButton);

export const SubmitTextButton = styled.Text`
  color: #fff;
  text-align: center
`;
