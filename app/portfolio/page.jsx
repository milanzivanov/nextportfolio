// import Counter from "../_components/Counter";

import PortfolioList from "../_components/PortfolioList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Portfolio page"
};

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gray-50 p-5 my-5 rounded-md">
        <h1 className="text-4xl py-5 text-gray-600 font-bold">Web portfolio</h1>

        <p className="text-grey-200 text-lg mb-10 max-w-5xl">
          Here you can find some of the projects I&apos;ve been working on. I
          have more and u can look them at my{" "}
          <a href="https://github.com/milanzivanov" className="text-blue-500">
            github profile.
          </a>
        </p>
      </div>

      <Suspense fallback={<Spinner />}>
        <PortfolioList />
      </Suspense>
      {/* <Counter workes={works} /> */}
    </div>
  );
}