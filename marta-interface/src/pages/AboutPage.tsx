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
            MARTA stands for Metropolitan Atlanta Rapid Transit Authority. 
            We are the nation's ninth largest transit system and the largest 
            of its kind in the Southeast that provides bus, rail, and paratransit 
            service. With 40 years of operations under its belt, MARTA services 
            three of the five core counties in the region and generates $2.6 billion 
            in economic impact to the state of Georgia. Employees of the region's 
            fastest growing sectors overwhelmingly choose MARTA to get to and from work. 
            People from every demographic across the region trust MARTA with their 
            routine transportation needs.
          </p>
        </div>
        <div className="image-section">
          <img src={trainImage} alt="MARTA train at a station" />
        </div>
      </main>
    </div>
  );
}