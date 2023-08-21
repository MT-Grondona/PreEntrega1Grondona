import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Contador({initial, stock, onAdd}) {

    let [contador, setContador] = useState(initial)

    const sumar = () => {
        setContador(contador + 1)

    }
    const restar = () => {
        setContador(contador - 1)

    }
    const resetear = () => {
        setContador(0)

    }

    return (
        <div>

            <Card style={{ width: '30rem' }}>
                    <Card.Title className="text-center">Cantidad : {contador}</Card.Title>
                <ListGroup className="list-group-flush text-center ">
                    <ListGroup.Item>
                    <Button disabled={contador <= 1} onClick={restar} variant="secondary m-2">-</Button>
                    <Button disabled={contador >= stock}   onClick={sumar} variant="secondary m-2">+</Button>
                    <Button onClick={resetear} variant="secondary">Resetear</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Button disabled={stock <=0} onClick={() => onAdd(contador)}>Agregar al carrito</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>

    )
}

export default Contador


