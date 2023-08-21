import { Link } from "react-router-dom"

function CartWidget() {
  return (
    <Link to='/carrito'>
    <img src="/carrito.png" style={{width: "30px", height: "30px"}} alt="carrito" />
      <span>1</span>
    </Link>
  )
}

export default CartWidget