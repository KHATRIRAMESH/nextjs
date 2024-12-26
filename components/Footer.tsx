import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-row items-center container  justify-between">
        <div className="pl-10 flex">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo image"
              width={80}
              height={20}
              loading="lazy"
            />
          </Link>
          <div>
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
