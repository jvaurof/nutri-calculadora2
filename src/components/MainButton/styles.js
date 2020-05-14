import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const ViewButton = styled.View`
  border-radius: 20px;
  margin: 20px 20px 15px 20px;
`;

export const AnimatableViewButton = Animatable.createAnimatableComponent(ViewButton);

export const Button = styled(RectButton)`
  background: #AB47BC;
  width: 100%;
  height: 80px;
  padding: 0 30px 0 30px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconAndTextView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextView = styled.View`
  margin-left: 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const SubText = styled.Text`
  color: #fff;
  font-size: 12px;
`;

const ArrowView = styled.View`
  background: #fff;
  border-radius: 100px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
`;

export const AnimatableArrowView = Animatable.createAnimatableComponent(ArrowView);
