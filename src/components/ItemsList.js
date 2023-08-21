import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




function ItemsList(props) {
    console.log(props)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-6 " >
            {props.data.length == 0 ? <p>Cargando...</p> : props.data.map((item, i) => {
                return (
                    <Card className='m-10 ' key={i} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                        <Link to='/detalle'>   
                    <Button variant="primary">Ver más</Button>
                    </Link> 

                    </Card>
                )

            })}
        </div>
    )
}

export default ItemsList
