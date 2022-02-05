import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { TextTeste } from '../../screens/Home/styles';

import { ContainerModal, Modal } from './styles';

interface ModalEditPros {
  visible: boolean;
}
export function ModalEdit({ visible }: ModalEditPros) {
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setModalVisible(visible);
  }, []);

  return (
    <ContainerModal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <TextTeste>asdasdad</TextTeste>
      </Modal>
    </ContainerModal>
  );
}
