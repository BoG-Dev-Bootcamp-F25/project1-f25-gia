import { useState } from 'react';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import './styles/LinesPage.css';

export default function LinesPage() {
    const [currColor, setCurrColor] = useState('gold');
    const [selectedStation, setSelectedStation] = useState<string | null>(null);
    const lineColors = ['gold', 'red', 'green', 'blue'];
  
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
            
            <TrainList 
              color={currColor} 
              selectedStation={selectedStation} 
            />
          </div>
        </div>
      );
}