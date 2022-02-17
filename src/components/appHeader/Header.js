import './header.scss';

const Header = () => {
    return (
      <div className="app__backsheet">
        <div className="app__sheet appheadersheet">
          <div>
            <p className="appheadersheet__title">SoundVisualMachine</p>
            <marquee className="appheadersheet__info" direction="left" scrollamount="4">Real-time sound analyzer SV Sound Machine... Parses the sound stream by frequency and visually plays it. It has settings for the number of channels and their frequency. Setting up visual accompaniment. The possibility of using a computer monitor as a color music installation. Adjust the sound frequencies and their number for clearer visualization..</marquee>
          </div>
          <div>
            ArtPRO 2022
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;