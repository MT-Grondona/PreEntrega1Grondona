
import Card from 'react-bootstrap/Card';




function ItemDetail(props) {

    return (
        <div >
            {props.data.length == 0 ? <p>Cargando...</p> : props.data.map((item, i) => {
                return (

                    <Card   className="m-20"  key={i} style={{ width: '60rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                )
            })}
        </div>
    )
}

export default ItemDetail