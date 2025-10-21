import { useState } from 'react';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import './styles/LinesPage.css';

export default function LinesPage() {
    const [currColor, setCurrColor] = useState('gold');
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
        <div className="tracker-container">
          
          {/* left sidebar */}
          <div className="sidebar">
            <NavBar 
              color={currColor} 
              selectedStation={selectedStation}
              onStationSelect={setSelectedStation}
            />
          </div>
    
          {/* right column */}
          <div className="main-content">
            <div className="line-buttons">
              {lineColors.map(color => (
                <button 
                  key={color}
                  onClick={() => {
                    setCurrColor(color);
                    setSelectedStation(null); 
                  }}
                  style={{ borderColor: currColor === color ? color : '#555' }}
                >
                  {color.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="filter-buttons">
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
            />
          </div>
        </div>
      );
}