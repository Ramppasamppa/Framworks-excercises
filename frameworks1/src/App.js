
import './App.css';
import Header from './components/Header';
import Luetuimmat from './components/Luetuimmat';
import NewsNotifications from './components/NewsNotification';
import Uutiset from './components/Uutiset';
import TeemuSelanneGolf from './images/TeemuSelanneGolf.jpg';
import VladPuEagle from './images/VladPuEagle.jpg';
import NewsNotification from './components/NewsNotification';
import { findByLabelText } from '@testing-library/dom';

function App() {
const NewsNotificationsData=[
  {
    topic: 'PÄIVÄN TIMANTTI:',
    body: 'Onko Hallituksessa yhtään järkevää tyyppi?'
  },
  {
    topic: 'OULU',
    body: 'OAMKissa havaittu koditon muusikko'
  },
  {
    topic: 'MAINOS',
    body: 'Kannabis pitää terveenä ja virkeänä, katso kolme helppoa vinkkiä!'
  }
];

const UutisetData=[
  {
    newsclass: 'URHEILU',
    headline: 'Teemu Selänne jatkaa uraansa: "Päätin vielä yhden vuoden golfata."',
    img: <img src={TeemuSelanneGolf}/>,
    time: 'Jääkiekko 9:15'
  },
  {
    newsclass: 'ULKOMAAT',
    headline: 'Vladimir Putin kesytti kotkan, katso kuvat!',
    img: <img src={VladPuEagle}/>,
    time: 'Venäjä 10:32'
  }
]


  return (
    <div>
  <Header/>
  {
    NewsNotificationsData.map(element => <NewsNotification topic={ element.topic } body={ element.body }/>)
  }
  <div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '1000px',
  
  }}>
  <div>
  <Uutiset Data={UutisetData}/> 
        
  </div>
  <Luetuimmat/>   
  </div>
</div>

  );
}


export default App;
