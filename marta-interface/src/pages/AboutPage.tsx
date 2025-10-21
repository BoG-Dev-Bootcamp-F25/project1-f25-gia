import { Link } from 'react-router-dom';
import './styles/HomePage.css'; // same formatting
import trainImage from './styles/Train.png';
import martaLogo from './styles/MartaNameLogo.png';

export default function AboutPage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-left"></div>
        <div className="header-center">
          <img src={martaLogo} alt="MARTA Logo" className="home-logo" />
        </div>
        <div className="header-right">
          <Link to="/" className="home-nav-link">Home</Link>
        </div>
      </header>

      <main className="home-main">
        <div className="routes-section">
          <h2>ABOUT MARTA</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            You can add your description of the MARTA system here. 
            The Metropolitan Atlanta Rapid Transit Authority is the principal public transport 
            operator in the Atlanta metropolitan area.
          </p>
        </div>
        <div className="image-section">
          <img src={trainImage} alt="MARTA train at a station" />
        </div>
      </main>
    </div>
  );
}