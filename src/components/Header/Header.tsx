import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full bg-gray-400 text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="font-bold text-3xl">
          Logo
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/product">Product</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contactus">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
}
