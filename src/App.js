import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu'
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes path='/'>
        <Route path='/red' component={RedPage} />
        <Route path='/blue' component={BluePage} />
      </Routes>
    </div>
  );
};

export default App;