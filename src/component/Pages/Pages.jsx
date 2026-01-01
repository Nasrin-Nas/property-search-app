
import Navbar from '../Structure/Navbar'
import Footer from '../Structure/Footer'
import Home from '../SearchForm/Home'
import Favourites from '../Property/Favourites'
import PropertyPage from "../Property/PropertyPage";
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function Pages (){
  return (
    <div>
     
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/property/:id" element={<PropertyPage />} />
        </Routes> 
        <Footer/>  
     
        
    </div>
  );
}

export default Pages
