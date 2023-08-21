import ItemDetail from './ItemDetail';
import ItemsCount from './ItemsCount';
import { useEffect, useState } from "react"

const productosHarcodeados = [{"name": "Torta Numero, Letra o Forma en masa Sablée",
"image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/593/products/marcada241-52b75f2ef4f207d80f15603873850563-480-0.jpg",
"description": "ANTICIPACION MINIMA: 3 DIAS Torta circular, corazon, letra o número.  Masa: sable o sablé de chocolate Rellenos: hasta dos sabores por torta (crema paris, cr...",}]

function ItemDetailContainer() {
    const [data, setData] = useState([])


    useEffect(() => {

        const getData = new Promise(resolve => (
            setTimeout(() => {
                resolve(productosHarcodeados)
            }, 2000)
        ))
        getData.then(res => setData(res))
    }, [])

    return (
        <>
            <ItemDetail data={data}></ItemDetail>
            <ItemsCount></ItemsCount>
        </>
    )
}

export default ItemDetailContainer