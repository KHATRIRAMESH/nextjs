import Image from "next/image";

export default function Home() {
  return (
    <div style={{ position: "absolute", height: "100vh", width: "100vw" }}>
      <Image
        src="/background.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        // quality={100} // Optional: Image quality
      />
    </div>
  );
}
