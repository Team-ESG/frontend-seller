import { atom } from 'recoil';

export interface User {
  accessToken: string;
  refreshToken: string;
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
