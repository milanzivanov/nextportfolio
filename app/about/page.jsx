import Image from "next/image";

import image1 from "@/public/Milan_left.webp";
import Link from "next/link";
import ButtonBack from "../_components/ButtonBack";

export const metadata = {
  title: "About page"
};

function AboutPage() {
  return (
    <div className="w-full 2xl:h-[calc(100dvh-86px)] h-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-gray-50 p-5 flex md:flex-row flex-col 2xl:rounded-md shadow-md">
          <div className="flex-1 flex flex-col justify-center space-y-1 md:space-y-4 pr-3 pb-5">
            <h1 className="text-2xl tracking-wider md:text-4xl text-gray-600 font-bold">
              Bit about myself
            </h1>
            <p className="text-grey-200 dark:text-slate-800 text-base 2xl:text-lg">
              Hi, I&apos;m Milan an enthusiastic front-end developer and design
              enthusiast with 2+ years of experience at{" "}
              <a
                href="https://www.vegaitglobal.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 dark:text-blue-700 hover:text-blue-800 transition-colors duration-300 ease-in-out"
              >
                Vega IT Solution
              </a>
              ,{" "}
              <a
                href="https://omadriatic.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 dark:text-blue-700 hover:text-blue-800 transition-colors duration-300 ease-in-out"
              >
                OMA Adriatic
              </a>
              , and{" "}
              <a
                href="https://htec.rs/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 dark:text-blue-700 hover:text-blue-800 transition-colors duration-300 ease-in-out"
              >
                HTEC
              </a>
              , I specialize in crafting clean, user-friendly digital
              experiences.
            </p>
            <p className="text-grey-200 dark:text-slate-800 text-base 2xl:text-lg">
              This is my little corner of the internet where I share my thoughts
              and ideas. Let&apos;s connect I&apos;m open to freelance
              opportunities and always eager to learn.
            </p>
            <p className="text-grey-200 dark:text-slate-800 text-base 2xl:text-lg">
              Excited about mastering{" "}
              <span className="font-semibold text-blue-500 dark:text-blue-700">
                Next.js
              </span>{" "}
              for my next adventure 🚀
            </p>
          </div>
          <div className="flex-1">
            <Image
              className="flex-1 object-cover bg-gray-300 rounded-md shadow-md"
              src={image1}
              alt="Family sitting around a fire pit in front of cabin"
              placeholder="blur"
              quality={80}
            />
          </div>
        </div>

        {/* BTH */}
        <div className="flex justify-center w-full px-5 2xl:px-0 md:justify-end my-5">
          <ButtonBack href="/">Go back home</ButtonBack>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
