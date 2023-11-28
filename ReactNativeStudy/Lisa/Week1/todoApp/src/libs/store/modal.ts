import {atom} from 'recoil';

type ModalStateType = {
  isRemoveTodoVisible: boolean;
  isAddTodoVisible: boolean;
};

const initialState: ModalStateType = {
  isRemoveTodoVisible: true,
  isAddTodoVisible: false,
};

export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: initialState,
});
