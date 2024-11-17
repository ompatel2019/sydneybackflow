import Topbar from "./components/Topbar"
import ServicesLine  from "./components/ServicesLine"
import Hero from "./components/Hero"


export default function App() {
  const heroTitle = 'Sydney Backflow and Plumbing'
  return (
    <>
      <Topbar/>
      <ServicesLine/>
      <Hero heroTitle={heroTitle}/>
    </>
  )
}