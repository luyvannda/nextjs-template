'use client';

import { atom } from 'recoil';
import { Product } from '@/types/productTypes';

export const cartState = atom<Product[]>({
  key: 'cart',
  default: [],
});

export const productState = atom<Product[]>({
  key: 'product',
  default: [],
});
