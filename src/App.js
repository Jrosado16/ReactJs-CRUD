import Formulario from './components/Formulario';
import Header from './components/Header';
import Table from './components/Table';
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <>
        <Header />
        <div className="container-fluid" style={{marginTop: '2rem'}}>
          <div className="row">
            <Formulario />
            <Table />
          </div>
          
        </div>
      </>
    </DataProvider>
  );
}

export default App;
