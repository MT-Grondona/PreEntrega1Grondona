import Contador from './Contador';

function ItemsCount() {
  
  const onAdd = (quantity) => { console.log(`Compraste ${quantity} unidades`)
}
  return (
<>
      <Contador initial={1} stock={5} onAdd={onAdd}></Contador>
      </>
  )
}    

export default ItemsCount

