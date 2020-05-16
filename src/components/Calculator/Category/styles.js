import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled(RectButton)`
  height: 25px;
  width: 100px;
  border-radius: 20px;
  justify-content: center;
  background: #AB47BC;
`;

export const Text = styled.Text`
  color: #fff;
  text-align: center;
`;
