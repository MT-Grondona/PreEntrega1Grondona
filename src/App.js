import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemsListContainer';

function App() {
let greeting= "Maria"

  return (
    <>
      <Navbar></Navbar>
      <h1 className="h1 py-4 text-center font-semibold">Te damos la bienvenida a nuestra tienda</h1>
      <ItemsListContainer greeting={greeting}></ItemsListContainer>

    </>
  );
}

export default App;
