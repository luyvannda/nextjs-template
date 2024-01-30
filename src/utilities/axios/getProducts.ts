import axios from 'axios';

export async function fetchAllProducts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
