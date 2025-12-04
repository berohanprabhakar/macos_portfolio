import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Navbar, Welcome } from '#components';
import Dock from '#components/Dock';
import { Terminal } from '#windows';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
    </div>
  );
};

export default App;
