import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import {
  Store,
  ShoppingCart,
  HelpCircle,
  Search,
  CircleUserRound,
} from 'lucide-react';

export default function NavBar() {
  return (
    <div className="w-full bg-gray-400 text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="flex items-center gap-4 text-xl">
          <Link href="/" className="">
            <Store />
          </Link>
          <Link href="/products">Products</Link>
        </div>
        <div className="space-x-4 text-xl flex items-center">
          <Link href="#">
            <Search />
          </Link>

          <Link href="#" className="flex items-center gap-[2px] text-sm">
            <ShoppingCart />
            (0)
          </Link>

          <Link href="/account/sign-in" className={buttonVariants()}>
            <CircleUserRound className="mr-1" />
            Sign in
          </Link>
          <Link href="/contactus">
            <HelpCircle />
          </Link>
        </div>
      </nav>
    </div>
  );
}
