import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

/* export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background: #fff;
  border-radius: 20px;
  padding: 35px;
`; */

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  background: #fff;
  padding:20px;
  border-radius: 30px;
`;

export const Title = styled.Text`
  color: #9C27B0;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: #000;
`;
