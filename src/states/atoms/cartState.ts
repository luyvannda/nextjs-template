'use client';

import { atom } from 'recoil';
import { ProductType } from '@/types/productTypes';

export const cartState = atom<ProductType[]>({
  key: 'cart',
  default: [],
});
