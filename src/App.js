import './styles/App.scss';
import Nav from './components/Nav/index';
import Masthead from './components/Masthead/index';
import TicketCard from './components/TicketCard/index';
import InfoSex from './components/InfoSex/index';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Masthead />
      </header>
      <section class="purchase">
        <div className="container">
          <TicketCard 
            tier="GA"
            price="$35"
            url="https://google.com"
          />
          <TicketCard 
            tier="GA+"
            price="$45"
            url="https://google.com"
          />
          <TicketCard 
            tier="VIP"
            price="$75"
            url="https://google.com"
          />
        </div>
      </section>
      <section className="details">
        <InfoSex 
          img="concert-background.jpg"
          imgAlt="Image of a concert"
          title="This is a title"
          content="blah blah blah."
          buttonText="hello"
        />
      </section>
    </div>
  );
}

export default App;
