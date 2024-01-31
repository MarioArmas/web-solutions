import './App.css';
import ContactUs from './layouts/ContactUs';
import Footer from './layouts/Footer';
import Landing from './layouts/Landing';
import Navbar from './layouts/Navbar';
import Pages from './layouts/Pages';

function App() {
  return (
    <div className="w-full h-full bg-[url('/public/assets/bg-image.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="App">
        <Navbar />
        <Landing />
        <Pages />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
