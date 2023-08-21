import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router';
import ItemDetailContainer from './ItemDetailContainer';
import ItemsList from './ItemsList';
import { useParams} from 'react-router-dom';


const productosHarcodeados = [{
    "name": "Torta Numero, Letra o Forma en masa Sablée",
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/593/products/marcada241-52b75f2ef4f207d80f15603873850563-480-0.jpg",
    "description": "ANTICIPACION MINIMA: 3 DIAS Torta circular, corazon, letra o número.  Masa: sable o sablé de chocolate Rellenos: hasta dos sabores por torta (crema paris, cr..."
}, {
    "name": "Chocooreo", category:"chocolate",
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/593/products/marcada611-6ea73d64cc70056c8515603869408916-480-0.jpg",
    "description": "ANTICIPACION MINIMA: 3 DIAS Base muy delgada de brownie con relleno de chocotorta y galletitas oreo /chocolinas según eleccion. Rinde: 15 porciones a 20 porc..."
}, {
    "name": "Brownie Frutos Rojos",categoria:"chocolate",
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/593/products/marcada551-1271612fda91ea19fc15603877988699-480-0.jpg",
    "description": "ANTICIPACION MINIMA: 2 DIAS Brownie de chocolate con dulce de leche, crema y mix de frutos rojos (mora, frambuesa y arandanos) Rinde: 10 a 12 porciones.(20 c..."
}, {
    "name": "Cheesecake Frutos Rojos",categoria :"fruta",
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/593/products/image000581-76befcd960bebb377115604488566855-480-0.jpg",
    "description": "ANTICIPACION MINIMA: 3 DIAS Cheesecake cocido con salsa de frutos rojos (mora, frambuesa y arandanos) Rinde: 12 porciones (20 m) Se entrega con salsa de frut..."
}, {
    "name": "Tarta de frutilla",categoria :"fruta",
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/593/products/image001001-af93b4b20a113f702a15680481070722-480-0.jpg",
    "description": "ANTICIPACION MINIMA: 3 DIAS Tarta de masa sablée con crema y frutillas.  Rinde: 8 porciones (20 cm)    "
}, {
    "name": "Manzana",categoria :"fruta",
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/593/products/marcada161-50c304a05989228ea715603866509515-480-0.jpg",
    "description": "ANTICIPACION MINIMA 2 DIAS Tarta de masa sable rellena de manzanas con canela y cubierta de crumble.  Rinde:  8 porciones (20 cm)  "
}]


function ItemsListContainer(props) {
    const [data, setData] = useState([])

    const {categoriaId} = useParams();

    useEffect(() => {

        const getData = new Promise(resolve => (
            setTimeout(() => {
                resolve(productosHarcodeados)
            }, 2000)
        ))
        if (categoriaId)
            getData.then(res => setData(res.filter(chocolate => chocolate.categoria === categoriaId)))
        else
                getData.then(res => setData(res))
    }, [categoriaId])

    
    return (
        <>
            <h1 className="h1 py-1 text-center font-semibold ">Te damos la bienvenida a nuestra tienda {props.greeting}</h1>
            <Routes>
                <Route path='/' element={<ItemsList data={data} ></ItemsList>}/>
                <Route path='/categoria/: categoriaId' element={<ItemsList data={data}></ItemsList>}/>
                <Route path='/detalle' element={<ItemDetailContainer></ItemDetailContainer>}/>
                <Route path='/carrito' element={<p>Carrito</p>} />

            </Routes>
        </>
    )
}

export default ItemsListContainer




