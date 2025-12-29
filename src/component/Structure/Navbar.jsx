
import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar (){
   return (

    <div className="navbar">
      <img src=" " alt="Logo"/>
      <ul >
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/properties'}>Properties</Link></li>
        <li><Link to={'/favourites'}>Favourites</Link></li>
        
      </ul>

    </div>
  )


}
  


export default Navbar
