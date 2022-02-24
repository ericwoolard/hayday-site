import logo from './logo.svg';
import './styles/App.scss';
import Masthead from './components/Masthead/index';
import Button from './components/Button/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Masthead />
      </header>
      <Button price="5.99" />
    </div>
  );
}

export default App;
