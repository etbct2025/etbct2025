import { lazy, Suspense } from "react";
const Carousel = lazy(() => import("../Components/AboutComponents/Carousel"));
import AboutUs from "../Components/AboutComponents/AboutUs";

const AboutPage = () => {
  return (
    <>
      <Suspense
        fallback={
          // This is a loading placeholder while the Carousel loads
          <div className="w-full h-[600px] bg-gray-100 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading carousel...</div>
          </div>
        }
      >
        <Carousel />
      </Suspense>
      <AboutUs />
    </>
  );
};

export default AboutPage;
