import Contact from "./Sections/Contact"
import Header from "./Sections/Header"
import HowWork from "./Sections/HowWork"
import Learn from "./Sections/Learn"
import NavBar from "./Sections/NavBar"


function App() {

  return (
    <div className="flex flex-col">
      <NavBar />
      <Header />
      <HowWork />
      <Learn />
      <Contact />
    </div>
  )
}

export default App
