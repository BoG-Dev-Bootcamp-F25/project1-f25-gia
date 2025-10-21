import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import martaNameLogo from './styles/MartaNameLogo.png';
import './styles/LinesPage.css';

export default function LinesPage() {
  const { lineColor } = useParams();
  const navigate = useNavigate();

  const currColor = lineColor || 'gold';
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const lineColors = ['gold', 'red', 'green', 'blue'];

  const handleFilterClick = (filter: string) => {
      setActiveFilters(prevFilters => {
          const newFilters = new Set(prevFilters);
          const isArrivingFilter = filter === 'ARRIVING';
          const isScheduledFilter = filter === 'SCHEDULED';
      
          if (newFilters.has(filter)) {
              newFilters.delete(filter); // toggle
          } else {
              newFilters.add(filter); // toggle
              // exclusive
              if (isArrivingFilter) newFilters.delete('SCHEDULED');
              if (isScheduledFilter) newFilters.delete('ARRIVING');

              if (filter === 'N') newFilters.delete('S');
              if (filter === 'S') newFilters.delete('N');

              if (filter === 'E') newFilters.delete('W');
              if (filter === 'W') newFilters.delete('E');
          }
          return Array.from(newFilters);
          });
      };

  const isNorthSouth = currColor === 'red' || currColor === 'gold';

  return (
    <div className="page-container">
      
      {/* top top header */}
      <header className="main-header">
        <div className="header-line-buttons">
          {lineColors.map(color => (
            <button 
              key={color}
              onClick={() => {
                navigate(`/tracker/${color}`);
                setSelectedStation(null);
              }}
              className={currColor === color ? 'active' : ''}
              style={{ backgroundColor: color }}
            >
              {color.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="header-nav">
          <button className="nav-button" onClick={() => navigate('/')}>Home</button>
          <button className="nav-button" onClick={() => navigate('/about')}>About</button>
          <img src={martaNameLogo} alt="MARTA Logo" className="header-logo" />
        </div>
      </header>

      {/* line name header */}
      <div className="sub-header">
        {/* <div
          className="line-title-accent"
          style={{ backgroundColor: currColor }}
        ></div> */}
        <h1 style={{ 
          fontFamily: "'Impact', fantasy",
          // fontStretch: 'ultra-condensed' 
          }}>
          {currColor.toUpperCase()}
        </h1>
        <div
          className="line-title-accent"
          style={{ backgroundColor: currColor }}
        ></div>
      </div>

      {/* main content */}
      <div className="tracker-container">
        <div className="sidebar">
          <NavBar 
            color={currColor} 
            selectedStation={selectedStation}
            onStationSelect={setSelectedStation}
          />
        </div>
        <div className="main-content">
          {/* filter header */}
          <div className="filter-bar">
            <button onClick={() => handleFilterClick('ARRIVING')} className={activeFilters.includes('ARRIVING') ? 'active' : ''}>Arriving</button>
            <button onClick={() => handleFilterClick('SCHEDULED')} className={activeFilters.includes('SCHEDULED') ? 'active' : ''}>Scheduled</button>
            
            {isNorthSouth ? (
              <>
                <button onClick={() => handleFilterClick('N')} className={activeFilters.includes('N') ? 'active' : ''}>Northbound</button>
                <button onClick={() => handleFilterClick('S')} className={activeFilters.includes('S') ? 'active' : ''}>Southbound</button>
              </>
            ) : (
              <>
                <button onClick={() => handleFilterClick('E')} className={activeFilters.includes('E') ? 'active' : ''}>Eastbound</button>
                <button onClick={() => handleFilterClick('W')} className={activeFilters.includes('W') ? 'active' : ''}>Westbound</button>
              </>
            )}
          </div>
          
          <TrainList 
            color={currColor} 
            selectedStation={selectedStation}
            activeFilters={activeFilters}
          />
        </div>
      </div>
    </div>
  );
}