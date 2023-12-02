import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceBox from "./components/ServiceBox";
import serviceData from "./components/files/serviceData";
import HistorySec from "./components/HistorySec";
import MassScheduleSec from "./components/MassScheduleSec";
import HeadingSec from "./components/HeadingSec";
import SpiritualActivitiesData from "./components/files/SpiritualActivities";
import BibleSec from "./components/BibleSec";
import Footer from "./components/Footer";

function App(){
  return(
    <>
    <Header/>
    <Hero/>
    <section className="services">
      {serviceData.map((data)=>{
        return(
          <ServiceBox servicedata = {data}/>
        )      
      })}
    </section> 
    <HistorySec/>  
    <MassScheduleSec/>
    <HeadingSec/>
    <section className="services">
      {SpiritualActivitiesData.map((data)=>{
        return(
          <ServiceBox servicedata = {data}/>
        )      
      })}
    </section> 
    <BibleSec/>
    <Footer/>
    </>
  )
}

export default App