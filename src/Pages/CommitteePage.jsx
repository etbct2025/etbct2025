import { lazy, Suspense } from "react";
const Carousel = lazy(() => import("../Components/AboutComponents/Carousel")); 
// import ChiefGuest from '../Components/CommiComponents/ChiefGuest'
// import Vc from '../Components/CommiComponents/Vc'
// import ConferenceConvener from "../Components/CommiComponents/ConferenceConvener";
import ChiefPatron from "../Components/CommiComponents/ChiefPatron";
import CommitteeMembers from "../Components/CommiComponents/CommitteeMembers";
import Registrar from "../Components/CommiComponents/Registrar";
import SpecialMembers from "../Components/CommiComponents/SpecialMembers";
import WorkshopMembers from "../Components/CommiComponents/WorkshopMembers";
import WorkCoord from "../Components/CommiComponents/WorkCoord";

const CommitteePage = () => {
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
      <section className="flex flex-col gap-y-10 py-5">
        {/* <ChiefGuest/> */}
        <ChiefPatron />
        <Registrar />
        {/* <ConferenceConvener /> */}
        <SpecialMembers />
        <CommitteeMembers />
        <WorkCoord />
        <WorkshopMembers />
      </section>
    </>
  );
};

export default CommitteePage;
