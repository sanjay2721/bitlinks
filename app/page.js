import Image from "next/image";
import localfont from "next/font/local";
import Link from "next/link";
const poppins = localfont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: '--font-poppins',
  weight: '400 600',
});

export default function Home() {
  return (
    <main className="bg-gray-100">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[60vh]">
        <div className="flex flex-col justify-center items-center px-10 gap-4">
          <p className={`text-2xl text-center md:text-3xl font-bold ${poppins.className}`}>
            The best URL shortener for your needs
          </p>
          <p className="text-center">
            We are the best URL shortener in the market. We provide a simple and easy to use interface to shorten your URLs.
          </p>
          <div className='flex flex-col sm:flex-row gap-2 '>
                <Link href="/shorten"><button className='bg-gray-700 shadow-lg rounded-lg p-2 py-1 font-bold text-white'>Try Now</button></Link>
                <Link href="/github"><button className='bg-gray-700 shadow-lg rounded-lg p-2 py-1 font-bold text-white'>GitHub</button></Link>
            </div>
          </div>
          <div className="relative flex justify-start w-full h-64 md:h-full">
            <Image className='mix-blend-darken' alt="an image of a vector" src={"/vector.jpg"} fill={true}/>
          </div>

      </section>
    </main>
  );
}
