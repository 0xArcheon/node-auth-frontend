import Login from "@/app/components/Login";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-dvh flex justify-center items-center relative">
      <Login />
      {/* <div className="absolute inset-0">
        <Image
          src="/images/orng.jpg"
          alt="orange"
          fill
          className="object-cover"
        ></Image>
      </div> */}
    </main>
  );
}
