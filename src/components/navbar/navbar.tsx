import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Store } from 'lucide-react';

export default function NavBar() {
  return (
    <div className="w-full bg-gray-400 text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="">
          <Store />
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/products">Products</Link>
          <Link href="#">Search</Link>
          <Link href="/account/sign-in" className={buttonVariants()}>
            Sign in
          </Link>
          <Link href="/contactus">Contact Us</Link>
          <Link href="#">Cart</Link>
        </div>
      </nav>
    </div>
  );
}
