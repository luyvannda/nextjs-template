import { selector } from 'recoil';
import { cartState } from '../atoms/cartState';

export const cartTotal = selector({
  key: 'cartTotal',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((sum, current) => sum + current.price, 0);
  },
});
