import { atom } from 'recoil';

export const userNameState = atom<string>({
  key: 'userNameState',
  default: '',
});

export const userImageState = atom<string | null>({
  key: 'userImageState',
  default: null,
});

export const userAuthState = atom<boolean>({
  key: 'userAuthState',
  default: localStorage.getItem('access_token') !== null,
});
