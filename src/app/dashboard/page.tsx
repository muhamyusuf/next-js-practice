import Image from "next/image";
import clsx from 'clsx';
// import { Image } from "next/image";

export default function Dashboard() {
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
        >Dashboard Page</p>
      </div>
    </main>
  );
}
