import './App.css';
import { GlobalStyle } from './Providers/sytle';
import Rotas from './router';

function App() {
  return (
    <div id='principal'>
      <GlobalStyle/>
      <Rotas/>
    </div>
  );
}

export default App;
