import React from 'react';

import Icons from 'react-native-vector-icons/AntDesign';

import {
  AnimatableViewButton,
  Button,
  TextView,
  Text,
  SubText,
  IconAndTextView,
  AnimatableArrowView
} from './styles';

const MainButton = ({ text, subText, animation, onPress }) => {
  return (
    <AnimatableViewButton
      elevation={20}
      animation={animation}
      duration={3000}
      useNativeDriver
      iterationCount={1}
    >
      <Button onPress={onPress}>
        <IconAndTextView>
          <Icons name="exclamationcircle" size={12} color="#fff" />
          <TextView>
            <Text>{text}</Text>
            {subText ? <SubText>{subText}</SubText> : null}
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
    </AnimatableViewButton>
  );
}

export default MainButton;
