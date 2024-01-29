import { selector } from 'recoil';

export const cartTotal = selector({
  key: 'cartTotal',
  get: () => {
    return 50;
  },
});
