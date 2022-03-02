import './styles/App.scss';
import Hamburger from './components/Hamburger/index';
import Nav from './components/Nav/index';
import Masthead from './components/Masthead/index';
import LineupFlier from './components/LineupFlier/index';
import TicketCard from './components/TicketCard/index';
import InfoSex from './components/InfoSex/index';
import Accordion from './components/Accordion/index';
import HelpOut from './components/HelpOut/index';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Masthead />
      </header>
      <section className="flier-section" id="lineup">
        <LineupFlier />
      </section>
      <section className="purchase" id="tickets">
        <div className="container">
          <TicketCard 
            tier="GA"
            price="$35"
            url="https://www.ticketfairy.com/event/hayday-fest/"
          />
          <TicketCard 
            tier="GA+"
            price="$45"
            url="https://www.ticketfairy.com/event/hayday-fest/"
          />
          <TicketCard 
            tier="VIP"
            price="$75"
            url="https://www.ticketfairy.com/event/hayday-fest/"
          />
        </div>
      </section>
      <section className="details" id="details">
        <InfoSex 
          align="left"
          img="hayfield.png"
          imgAlt="Image of a hay field"
          title="venue"
          buttonText="hello"
          url="https://mshorsepark.com">
            <p>MS Horse Park is partnered with the City of Starkville, Oktibbeha County, and MSU to provide their guests with the best possible entertainment experience.<br/><br/>This impressive facility boasts a massive 100 acre plot of land at which it hosts over 40,000 people every year. As an extension of MSU, it’s located just south of campus on Poor House Rd.<br/><br/>We are thrilled to be partnering with the City of Starkville and MSU to officially bring back the 2nd annual Hayday Fest to Starkville Ms!<br/><br/> See you on the Hayfield! 
</p>
          </InfoSex>
          <InfoSex 
            align="right"
            img="hayfield.png"
            imgAlt="Image of a concert"
            title="faq">
              <Accordion />
          </InfoSex>
      </section>
      <section className="help-section" id="help">
        <HelpOut />
      </section>
    </div>
  );
}

export default App;
