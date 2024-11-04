import WelcomeSection from '../Components/HomeComponents/WelcomeSection'

import Timeline from '../Components/HomeComponents/Timeline'
// import KeyPersons from '../Components/HomeComponents/KeyPersons'
import Contact from '../Components/HomeComponents/Contact'

import Carousel from '../Components/AboutComponents/Carousel'
import Countdown from '../Components/HomeComponents/Countdown'


const HomePage = () => {
  return (
    <>
     <Carousel/>
     <WelcomeSection/>
     
     <Timeline/>
     {/* <KeyPersons/> */}
     <div className="countdown px-16 py-16 flex flex-col items-center">
  <h1 className="text-4xl font-bold text-orange-500 text-center mb-10">Conference begins in</h1>
  <div className="flex justify-center items-center  rounded-xl shadow-[0_4px_10px_rgba(255,165,0,0.7)]">
    <Countdown targetDate="2025-02-14T23:59:59" />
  </div>
</div>


     <Contact/>
    
    </>
  )
}

export default HomePage