import { Navbar, Welcome } from "#components"
import Dock from "#components/Dock"



const App = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Dock/>
    </div>
  )
}

export default App