import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  return (
    <div className="container flex flex-col justify-center items-center space-y-2">
      <h1>Pricing</h1>
      <Image
        src="/shoes.jpg"
        alt="a simple shoes for demo"
        width={400}
        height={400}
      />
      <h2>PUMA Men&apos;s Tazon 6 Sneaker</h2>
      <p>Price: $50</p>

      <Button className="hover:bg-green-400" variant={'destructive'}>
        Add to cart
      </Button>
    </div>
  );
}
