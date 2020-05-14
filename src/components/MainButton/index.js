import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

import {
  ViewButton,
  Button,
  TextView,
  Text,
  SubText,
  IconAndTextView,
  AnimatableArrowView
} from './styles';

const MainButton = ({ text, subText }) => {
  return (
    <ViewButton elevation={20}>
      <Button>
        <IconAndTextView>
          <Icons name="exclamationcircle" size={12} color="#fff" />
          <TextView>
            <Text>{text}</Text>
            <SubText>{subText}</SubText>
          </TextView>
        </IconAndTextView>
        <AnimatableArrowView
          elevation={20}
          animation="pulse"
          useNativeDriver
          iterationCount={Infinity}
        >
          <Icons name="arrowright" size={25} color="#333" />
        </AnimatableArrowView>
      </Button>
    </ViewButton>
  );
}

export default MainButton;
