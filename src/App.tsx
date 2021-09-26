import { Provider } from 'react-redux';
import { store } from './state';

import './App.css';
import { RepositoriesList } from './components/RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <h1>Search for a package</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
