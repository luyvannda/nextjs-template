'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRecoilState } from 'recoil';
import { cartState } from '@/states/atoms/cartState';
import { ShoppingCart } from 'lucide-react';
import { Item } from '@/models/item';

export default function Pricing() {
  const [cart, setCart] = useRecoilState(cartState);

  const getRandomItem = () => {
    const items = ['Nike', 'Adidas', 'Puma', 'Fila', 'Gucci', 'Dior'];
    return items[Math.floor(Math.random() * items.length)];
  };

  const addToCart = () => {
    const newItem = {
      id: Math.random(),
      description: getRandomItem(),
      price: 50,
    } as Item;

    setCart([...cart, newItem]);
  };

  return (
    <div className="container flex flex-col justify-center items-center space-y-2">
      <h1>Pricing</h1>
      <Image
        src="/shoes.jpg"
        alt="a simple shoes for demo"
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
      />
      <h2>PUMA Men&apos;s Tazon 6 Sneaker</h2>
      <p>Price: $50</p>
      <div className="flex items-center gap-2">
        <ShoppingCart />
        <p>{cart.length}</p>
      </div>

      <Button
        onClick={addToCart}
        className="hover:bg-green-400"
        variant={'destructive'}
      >
        Add to cart
      </Button>
    </div>
  );
}
