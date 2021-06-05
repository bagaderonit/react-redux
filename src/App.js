import { Provider } from 'react-redux';
import {store} from './redux/store'
import './App.css';
import Cakes from './Component/Cakes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cakes />
      </div>
    </Provider>
  );
}

export default App;
