import Navlinks from "./Navlinks"
import { Link } from "react-router-dom"



function Navbar() {
    return (
        <>
            <Link to="/" id="navbar" className="navbar flex justify-between p-2 bg-slate-800 text-white">
            <h2 className="font-semibold font-sans">Solo te quiero dulce</h2>
            <Navlinks></Navlinks>
            </Link>
        </>
    )
}

export default Navbar