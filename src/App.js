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
      <section className="purchase">
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
          align="left"
          img="hayfield.png"
          imgAlt="Image of a concert"
          title="venue"
          buttonText="hello">
            <p>MS Horse Park is partnered with the City of Starkville, Oktibbeha County, and MSU to provide their guests with the best possible entertainment experience.<br/><br/>This impressive facility boasts a massive 100 acre plot of land at which it hosts over 40,000 people every year. As an extension of MSU, it’s located just south of campus on Poor House Rd.<br/><br/>We are thrilled to be partnering with the City of Starkville and MSU to officially bring back the 2nd annual Hayday Fest to Starkville Ms!<br/><br/> See you on the Hayfield! 
</p>
          </InfoSex>
          <InfoSex 
            align="right"
            img="hayfield.png"
            imgAlt="Image of a concert"
            title="venue"
            buttonText="hello">
              <p>MS Horse Park is partnered with the City of Starkville, Oktibbeha County, and MSU to provide their guests with the best possible entertainment experience.<br/><br/>This impressive facility boasts a massive 100 acre plot of land at which it hosts over 40,000 people every year. As an extension of MSU, it’s located just south of campus on Poor House Rd.<br/><br/>We are thrilled to be partnering with the City of Starkville and MSU to officially bring back the 2nd annual Hayday Fest to Starkville Ms!<br/><br/> See you on the Hayfield! 
            </p>
          </InfoSex>
          <InfoSex 
            align="left"
            img="hayfield.png"
            imgAlt="Image of a concert"
            title="venue">
              <p>MS Horse Park is partnered with the City of Starkville, Oktibbeha County, and MSU to provide their guests with the best possible entertainment experience.<br/><br/>This impressive facility boasts a massive 100 acre plot of land at which it hosts over 40,000 people every year. As an extension of MSU, it’s located just south of campus on Poor House Rd.<br/><br/>We are thrilled to be partnering with the City of Starkville and MSU to officially bring back the 2nd annual Hayday Fest to Starkville Ms!<br/><br/> See you on the Hayfield! 
            </p>
          </InfoSex>
          <InfoSex 
            align="right"
            img="hayfield.png"
            imgAlt="Image of a concert"
            title="venue"
            buttonText="hello">
          </InfoSex>
      </section>

      <header className="App-header">
        <Masthead />
      </header>
      <header className="App-header">
        <Masthead />
      </header>
    </div>
  );
}

export default App;
