import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded shadow-lg">
      <div className="flex flex-row items-center container  justify-between pl-4">
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
        <div>
          <div>Main</div>
          <div>Pools</div>
          <div>About</div>
          <div>Contact Us</div>
          <div>Networks</div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-center px-4 md:px-8">
        <div className="flex items-center gap-1 text-sm md:text-base">
          <span>&copy;{new Date().getFullYear()} Builder Academy</span>
          <span>| All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
