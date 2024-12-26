import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
