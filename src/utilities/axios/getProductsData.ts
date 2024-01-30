import { Product } from '@/types/productTypes';
import axios from 'axios';

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(
    'https://fakestoreapi.com/products'
  );
  return response.data;
}
