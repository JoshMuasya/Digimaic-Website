import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Solution from './components/Solutions/Solution';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Solution />
      <Contact />
    </div>
  );
}

export default App;
