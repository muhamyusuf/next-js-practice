import Image from "next/image";
import clsx from 'clsx';
import Weather from "./components/weather";
// import { Image } from "next/image";

export default function Home() {
  let nama = 'Jajang';

  return (
    <main>
      <div className="flex justify-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={60}
          height={60}
          className=""
        />
        <p
          className={clsx(
            "text-xl",
            "text-center",
            "font-bold",
            {
              'text-gray-500': nama === 'Ujang',
              'text-red-500': nama === 'Jajang',
            }
          )}
        >Ujang</p>

      </div>

        <div className="mt-10">
          <Weather/>
        </div>
    </main>
  );
}
