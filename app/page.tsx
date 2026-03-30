"use client"
import Login from "@/app/components/Login";
import Image from "next/image";
import { useQuery } from '@tanstack/react-query';


export default function Home() {

  const { isPending, error, data } = useQuery({
    queryKey: ["testQuery"],
    queryFn: async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      return await result.json();
    }
  });

  if (isPending) return "Loading..."
  if (error) return ("An error occured, " + error.message);

  return (
    <main className="h-dvh flex justify-center items-center relative">
      <Login />
    </main>
  );
}
