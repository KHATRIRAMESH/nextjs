import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded shadow-lg mt-36 mb-8 mx-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 items-center container  justify-between pl-4">
        <div className="pl-10 flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo image"
              width={80}
              height={20}
              loading="lazy"
              className="rounded-lg"
            />
          </Link>
          <div className="container text-sm">
            Join the next evolution of the internet—where trust, transparency,
            and ownership belong to you. Build, trade, and connect in a
            borderless digital world.
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 text-lg">
          <Link href="/pools">Pools</Link>
          <Link href="/about">About Us</Link>
          <Link href="/security">Security</Link>
          <Link href="/signin">Sign In</Link>
        </div>
        <div className="flex flex-col text-lg items-start gap-2">
          <Link href="/security">Privacy Policy</Link>
          <Link href="/terms-of-service">Media kit</Link>
          <Link href="/privacy-policy">Legal notes</Link>
        </div>
        <div className="flex flex-col text-lg items-start gap-2">
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/security">Security</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/careers">Careers</Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-5 justify-center gap-4 text-center px-4 md:px-8">
        <div className="flex items-center gap-1 text-sm md:text-base">
          <span>&copy;{new Date().getFullYear()} Builder Academy</span>
          <span>|</span>
          <span> All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
