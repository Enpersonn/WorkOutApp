import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-screen h-[100vh]">
      <Image width={50} height={50} src={"/images/BROZA.jpg"} alt="epic app" className=" object-fill w-full h-full" />
    </main>
  );
}
