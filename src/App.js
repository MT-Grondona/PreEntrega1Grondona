import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Toogle from './components/Toogle';
import ItemsListContainer from './components/ItemsListContainer';
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
let greeting= "Maria"

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Toogle></Toogle>
      <ItemsListContainer greeting={greeting}></ItemsListContainer>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
