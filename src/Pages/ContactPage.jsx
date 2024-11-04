import { lazy, Suspense } from "react";
import Contact from "../Components/HomeComponents/Contact";
const Carousel = lazy(() => import("../Components/AboutComponents/Carousel"));

const ContactPage = () => {
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
      <Contact />
    </>
  );
};

export default ContactPage;
