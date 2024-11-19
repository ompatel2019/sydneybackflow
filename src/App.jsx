import Topbar from "./components/Topbar"
import ServicesLine  from "./components/ServicesLine"
import Hero from "./components/Hero"
import Cta from "./components/Cta"
import Services from "./components/Services"
import Job from "./components/Job"
import Details from "./components/Details"


export default function App() {
  const heroTitle = 'Sydney Backflow and Plumbing'
  return (
    <>
      <Topbar/>
      <ServicesLine/>
      <Hero heroTitle={heroTitle}/>
      <Cta/>
      <Services/>
      <Job/>
      <Details/>
    </>
  )
}