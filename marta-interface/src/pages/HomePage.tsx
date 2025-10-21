import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import train from './styles/Train.jpg';
import martaLogo from './styles/MartaNameLogo.png';

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={martaLogo} alt="MARTA Logo" className="home-logo" />
        <Link to="/about" className="home-nav-link">About MARTA</Link>
      </header>

      <main className="home-main">
        <div className="routes-section">
          <h2>VIEW ROUTES SCHEDULE</h2>
          <Link to="/tracker/gold" className="route-link">Gold Line</Link>
          <Link to="/tracker/red" className="route-link">Red Line</Link>
          <Link to="/tracker/green" className="route-link">Green Line</Link>
          <Link to="/tracker/blue" className="route-link">Blue Line</Link>
        </div>
        <div className="image-section">
          <img src={train} alt="MARTA train on tracks" />
        </div>
      </main>
    </div>
  );
}