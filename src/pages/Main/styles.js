import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const Title = styled.Text`
  text-align: right;
  color: #fff;
  font-size: 22px;
  padding: 30px;
`;

export const AnimatableTitle = Animatable.createAnimatableComponent(Title);

export const LineView = styled.View`
  position: absolute;
`;
