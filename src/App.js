import React, { useRef, useEffect, useState } from 'react';
import './styles/App.scss';
import Nav from './components/Nav/index';
import Masthead from './components/Masthead/index';
import LineupFlier from './components/LineupFlier/index';
import TicketCard from './components/TicketCard/index';
import InfoSex from './components/InfoSex/index';
import Accordion from './components/Accordion/index';
import HelpOut from './components/HelpOut/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';

const useElementOnScreen = (options) => {
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  // const callbackFunction = (entries) => {
  //   console.log(entries)
  //   console.log('fire')
  //   const [ entry ] = entries
  //   setIsVisible(entry.isIntersecting)
  // }

  useEffect(() => {
    // console.log('returned');
    // const observer = new IntersectionObserver(callbackFunction, options)
    // if (containerRef.current) observer.observe(containerRef.current)
    
    // return () => {
    //   if(containerRef.current) observer.unobserve(containerRef.current)
    // }
  }, [containerRef, options])

  return [containerRef, isVisible]
}



function App() {
  const [ containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "100px",
    threshold:1.0
  })

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Masthead />
      </header>
      {/* <section className="flier-section" id="lineup">
        <LineupFlier />
      </section> */}
      <section className='purchase' id="tickets">
        <div className="container">
          <TicketCard 
            tier="GA"
            price="$40"
            url="https://bit.ly/haydayfesttickets"
          />
          <TicketCard 
            tier="VIP"
            price="$80"
            url="https://bit.ly/haydayfesttickets"
          />
        </div>
      </section>
      <section className="details" id="details">
        <div className={isVisible ? 'active' : ''} ref={containerRef}>
          <InfoSex 
            className="info-sex left"
            img="HayDayLogo_FPO.svg"
            imgAlt="Hayday logo"
            title="about"
            buttonText="learn more"
            id="about"
            url="https://huntersformschildren.com">
              <p>HayDay Music Fest is an annual music festival held in Starkville, MS. 
              It's a place to come and enjoy a bite from your favorite food truck, spend 
              time with friends and family, listen to some amazing artists, and have a great time.<br/>
              <br/>HayDay Music Fest not only hosts local talent, but also showcases nationally 
              recognized artists on stage. We can't wait to see you on the hayfield!<br/><br/>
              5% of all proceeds will go directly to Hunters for Mississippi Children. To learn 
              more about HFMC or to donate to the charity, click the button below.
              </p>
          </InfoSex>
        </div>
        <div className={isVisible ? 'active' : ''} ref={containerRef}>
          <InfoSex 
            className="info-sex right"
            img="hayfield.png"
            imgAlt="Image of a hay field"
            title="venue"
            buttonText="learn more"
            id="venue"
            url="https://mshorsepark.com">
              <p>MS Horse Park is partnered with the City of Starkville, Oktibbeha County, and MSU 
              to provide their guests with the best possible entertainment experience.<br/><br/>This 
              impressive facility boasts a massive 100 acre plot of land at which it hosts over 40,000 
              people every year. As an extension of MSU, it’s located just south of campus on Poor House Rd.
              <br/><br/>We are thrilled to be partnering with the City of Starkville and MSU to officially 
              bring back the 2nd annual Hayday Fest to Starkville Ms!</p>
            </InfoSex>
          </div>
          <div className={isVisible ? 'active' : ''} ref={containerRef}>
            <InfoSex 
              className="info-sex left"
              img="faq-image.png"
              imgAlt="Image of a phone with concert background"
              title="faq"
              id="faq">
                <Accordion />
            </InfoSex>
          </div>
      </section>
      <section className="help-section" id="help">
        <HelpOut />
      </section>
      <section className="contact-section" id="contact">
        <Contact />
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
