import React from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import {
  modalDispatch,
  selectModal,
} from '../../store/reducers/utilitiesReducer';
import { modals } from './modals';
import { useUtilities } from '../../hooks/useUtilities';

export const BasicModal: React.FunctionComponent<any> = () => {
  const { dispatch } = useUtilities();
  const { visible, title, footer, onCancel, onOk } = useSelector(selectModal);
  const Component: any = modals.UserInformation;

  const handleOnCancel = () => dispatch(modalDispatch({ visible: false }));

  return (
    <Modal
      visible={visible}
      title={title}
      onOk={onOk}
      onCancel={handleOnCancel}
      footer={footer}
    >
      <Component />
    </Modal>
  );
};
