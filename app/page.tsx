import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-screen h-[100vh] relative">
      <Image width={12} height={50} src={"/images/BROZA.jpg"} alt="epic app" className=" shake object-fill w-full h-full" />
      <Image width={50} height={50} src={"/images/image (2).png"} alt="epic app" className=" AugustPopIn w-72 h-72 absolute top-11 animate-ping" />
      <Image width={50} height={50} src={"/images/image.png"} alt="epic app" className=" AugustPopIn2 absolute bottom-56 right-12" />
      <Image width={50} height={50} src={"/images/image (2).png"} alt="epic app" className=" AugustPopIn2 w-72 h-72 absolute top-9" />
      <Image width={50} height={50} src={"/images/image (2).png"} alt="epic app" className=" AugustPopIn3 w-72 h-72 absolute right-28 top-28" />
      <div className=" w-[100vw] h-[100vh] absolute top-0 flex justify-center items-center z-50">
        <div className=" text-red-500 animate-bounce relative ">
          <div className=" group">
            <p className=" text-4xl  ">Make new workout</p>
            <Image width={50} height={50} src={"/images/image (1).png"} alt="epic app" className=" absolute -top-24 opacity-0 group-hover:opacity-100  w-72 h-72 transition-all duration-1000" />
          </div>
          <p className=" text-4xl animate-spin">New set</p>
        </div>
      </div>
    </main >
  );
}
