import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'



function Navlinks() {
    return (
        <nav className='flex gap-4' >
            <Link to="/">Inicio</Link> 
            <Link to='/categoria/chocolate'>Tortas chocolate</Link>
            <Link to='/categoria/frutales'>Tortas frutales</Link> 
            <CartWidget></CartWidget>  
        </nav>
    )
}

export default Navlinks