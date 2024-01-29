'use client';

import { atom } from 'recoil';
import { Item } from '@/models/item';

export const cartState = atom<Item[]>({
  key: 'cart',
  default: [],
});
