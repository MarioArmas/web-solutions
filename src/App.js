import './App.css';
import Footer from './layouts/Footer';
import Landing from './layouts/Landing';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="w-full h-full bg-[url('/src/assets/bg-image.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="App">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
