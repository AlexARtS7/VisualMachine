import './header.scss';

const Header = () => {
    return (
        <div className="app__sheet appheadersheet">
          <div>
            <div className="appheadersheet__title">SoundVisualMachine</div>
            <marquee className="appheadersheet__info" direction="left" scrollamount="4">Real-time sound analyzer Sound Machine... Parses the sound stream by frequency and visually plays it. It has settings for the number of channels and their frequency. Setting up visual accompaniment. The possibility of using a computer monitor as a color music installation. Adjust the sound frequencies and their number for clearer visualization.. Еhe author of the application ArtPRO Studio. 2022 Suggestions can be sent to enginpro@yandex.ru</marquee>
          </div>
        </div>        
    );
  }
  
  export default Header;