import './App.css';
import AppRoutes from './routes';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} theme="dark"/>
      <AppRoutes />
    </div>
  );
}

export default App;
