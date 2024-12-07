import Image from "next/image";

import image1 from "@/public/Milan_right.webp";

import "devicon/devicon.min.css";
import Link from "next/link";

export const metadata = {
  title: "Contact page"
};

function ContactPage() {
  return (
    <div className="w-full md:h-[calc(100dvh-86px)] flex md:flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 md:p-5 rounded-md shadow-md flex flex-col md:flex-row">
          <Image
            className="object-cover bg-gray-300 md:rounded-md"
            src={image1}
            alt="milan picture"
            placeholder="blur"
            quality={80}
            width={500}
            height={500}
            style={{ width: "auto", height: "auto" }}
          />

          <div className="flex-1 p-5">
            <h1 className="text-2xl tracking-wider md:text-4xl mb-2 text-gray-600 font-bold">
              Get in touch with me
            </h1>

            <p className="text-grey-200 dark:text-slate-800 text-base md:text-lg mb-5">
              I&apos;d love to hear from you if you have any questions or want
              to work together. Don&apos;t hesitate to reach out!
            </p>

            <h3 className="text-lg text-grey-200 dark:text-slate-800 font-semibold tracking-wide">
              You can find me on:
            </h3>
            <ul className="flex flex-wrap mb-5  bg-slate-100  p-5 rounded-md shadow-md">
              <li className="flex items-center mr-3">
                <a
                  className="flex items-center text-lg md:text-xl text-blue-500 dark:text-blue-700 hover:text-blue-800 gap-1"
                  href="https://www.linkedin.com/in/milan-%C5%BEivanov1983/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="devicon-linkedin-plain text-xl md:text-2xl"></i>
                  <span className="text-base">LinkedIn</span>
                </a>
              </li>
              <li className="flex items-center mr-3">
                <a
                  className="flex items-center text-lg md:text-xl text-blue-500 dark:text-blue-700 hover:text-blue-800 gap-1"
                  href="https://github.com/milanzivanov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="devicon-github-original text-xl md:text-2xl"></i>

                  <span className="text-base">Github</span>
                </a>
              </li>
            </ul>
            <h4 className="text-md text-grey-200 dark:text-slate-800 font-semibold tracking-wide">
              email:{" "}
              <span className="text-blue-500 dark:text-blue-700 text-sm italic">
                milan.zivanov@gmail.com
              </span>
            </h4>
          </div>
        </div>
        {/* BTH */}
        <div className="flex justify-center px-5 md:px-0 md:justify-end my-5">
          <Link
            href="/"
            className="flex items-center w-full md:w-auto justify-center rounded-md bg-blue-500 dark:bg-blue-700 hover:bg-blue-800 text-gray-100 px-6 py-3 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>

            <span>Go back home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
