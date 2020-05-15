import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
`;

export const ResultView = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
`;

export const ResultText = styled.Text`
  color: #fff;
  font-size: 50px;
`;

export const ResultSubText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const CategoryView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CategoryButton = styled(RectButton)`
  height: 25px;
  width: 100px;
  border-radius: 20px;
  justify-content: center;
  background: #AB47BC;
`;

export const CategoryText = styled.Text`
  color: #fff;
  text-align: center;
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

export const IconView = styled.View`
  position: absolute;
`;

export const MeasureView = styled.View`
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


/*
export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  text-align: center;
  padding-top: 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 50px;
  text-align: center;
  padding-top: 100px;
`;

export const SubText = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
  padding-top: 10px;
`;

export const IconView = styled.View`
  position: absolute;
  flex: 1;
  top: 40px;
  left: 62px;
`;

export const PersonTypeView = styled.View`
  flex-direction: row;
  padding-top: 130px;
  flex: 1;
  justify-content: space-around;
`;

export const ButtonView = styled.View`
  background: yellow;
`

export const PersonTypeButton = styled(RectButton)`
  height: 25px;
  width: 100px;
  border-radius: 20px;
  justify-content: center;
  background: #AB47BC;
`;

export const PersonTypeText = styled.Text`
  color: #fff;
  text-align: center;
`;

export const LabelView = styled.View`
  flex-direction: row;
  padding: 0 20px 0 20px;
`;

export const InputLabel = styled.Text`
  color: #fff;
  flex: 1;
`;

export const InputView = styled.View`
  flex-direction: row;
  padding: 0 20px 0 20px;
`;

export const Input = styled(TextInputMask).attrs({
  placeholderTextColor: '#fff'
})`
  flex: 1;
  font-size: 25px;
`;

export const SubmitView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const SubmitButton = styled(RectButton)`
  height: 90px;
  width: 90px;
  border-radius: 50px;
  justify-content: center;
  background: #AB47BC;
`;

export const SubmitTextButton = styled.Text`
  color: #fff;
  text-align: center;
`; */







