import './App.css'
import 'font-awesome/css/font-awesome.min.css'

import Header from './components/NavBar/index'
import ImageSlider from './components/Slider/ImageSlider';
import { SliderData } from './components/Slider/ImageData';
import RowOptions from './components/RowOptions';
import OurProducts from './components/OurProduct';
import WhatsappBanner from './components/WhatsAppBanner';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider slides={SliderData} />
      <RowOptions />
      <OurProducts />
      <WhatsappBanner />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
