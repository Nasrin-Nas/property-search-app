
import Navbar from '../Structure/Navbar'
import Home from '../SearchForm/Home'
import Properties from '../Property/Properties'
import Favourites from '../Property/Favourites'
import PropertyPage from "../Property/PropertyPage";
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function Pages (){
  return (
    <div>
     
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/properties" element={<Properties/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>   
     
        
    </div>
  );
}

export default Pages
