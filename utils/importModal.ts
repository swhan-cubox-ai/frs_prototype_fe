import { lazy } from 'react';
import { ModalIndex } from 'typeDefs/Modal';
export const modalName = {
  UserAddModal: 'UserAddModal',
  UserEditModal: 'UserEditModal',
  FRImageModal: 'FRImageModal',
};

const modalList: ModalIndex[] = [
  {
    name: modalName.UserAddModal,
    component: lazy(() => import('components/Modal/User/UserAddModal')),
  },
  {
    name: modalName.UserEditModal,
    component: lazy(() => import('components/Modal/User/UserEditModal')),
  },
  {
    name: modalName.FRImageModal,
    component: lazy(() => import('components/Modal/FRImageModal')),
  },
];

export default modalList;
