import React, { useState } from 'react';
import { Modal } from 'react-native';

import Icons from 'react-native-vector-icons/AntDesign';

import {
  Button,
  ModalView,
  CenteredView,
  Title,
  Text
} from './styles';

const Information = ({ text }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button onPress={() => setModalVisible(true)}>
        <Icons name="infocirlceo" size={20} color="#fff" />
      </Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <CenteredView>
          <ModalView elevation={4}>
            <Title>Informações</Title>
            <Text>{text}</Text>
          </ModalView>
        </CenteredView>
      </Modal>
    </>
  );
}

export default Information;
