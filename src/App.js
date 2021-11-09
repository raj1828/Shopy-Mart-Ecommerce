import './App.css';
import ContainItem from './Componants/ContainItem';
import BasicForm from './Componants/Forms/BasicForm';
import Items from './Componants/Items';
import Navbar from './Componants/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      {/* <ContainItem/> */}
      <Items/>
      <BasicForm/>
    </>
  );
}

export default App;
