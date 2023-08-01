
import CartWidget from "./CartWidget"

function Navbar() {
    return (
        <>
            <div id="navbar" className="navbar flex justify-between py-6 px-10 bg-slate-800 text-white">
            <h1>Solo te quiero dulce</h1>
            <a href="#">Inicio</a>
            <a href="#">Nosotros</a>
            <a href="#">Tienda</a>
            <a href="#">Contacto</a>
            <CartWidget></CartWidget>
            </div>
        </>
    )
}

export default Navbar