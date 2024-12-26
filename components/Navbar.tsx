import { Facebook, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent">
      <div className="pl-10">
        <Link href="/">
          <Image src="/logo.png" alt="logo image" width={80} height={20} />
        </Link>
      </div>
      <div className="flex justify-between items-center  font-bold text-lg gap-10">
        <Link href="/pools" className="hover:underline">
          <span>Pools</span>
        </Link>
        <Link href="/about-us" className="hover:underline">
          <span>About Us</span>
        </Link>
        <Link href="/about-us" className="hover:underline">
          <span>Our Networks</span>
        </Link>
        <Link href="/about-us" className="hover:underline">
          <span>Updates</span>
        </Link>
      </div>
      <div className="flex gap-4 text-lg ">
        <Link href="https://telegram.com" className=" contents bg-white text-black ">
          <Send />
        </Link>
        <Link href="https://facebook.com" className=" contents bg-white text-black contain-content">
        <Facebook />
        </Link>
      
        <Link href="https://github.com/" >
          <span>Join Community +</span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
