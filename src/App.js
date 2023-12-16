
import './App.css';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import About from './componets/About';
import ContactUs from './componets/ContactUs';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Product from './componets/Product';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route exact path='/' Component={Home}/>
   <Route exact path='/product' Component={Product}/>
   <Route exact path='/about' Component={About}/>
   <Route exact path='contactus' Component={ContactUs}/>
   </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
