import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routesapp from './routes';

function App() {
  return (
    <div className="App">
     <ToastContainer autoClose={3000} />
     <Routesapp />

    </div>
  );
}

export default App;
