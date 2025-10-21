import { useState, useEffect } from 'react';

interface NavBarProps {
    color: string;
    selectedStation: string | null;
    onStationSelect: (station: string | null) => void;
}

export default function NavBar({ color, selectedStation, onStationSelect }: NavBarProps) {
    const [stations, setStations] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      const apiUrl = `https://midsem-bootcamp-api.onrender.com/stations/${color}`;

      fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched station data:", data); // debugging
        setStations(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch station data:", error);
        setIsLoading(false);
      });
  }, [color]);

  if (isLoading) {
    return <p>Loading stations...</p>;
  }

  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee', border: '1px solid #ccc', marginBottom: '10px' }}>
      <h4
        style={{
            color: '#333',
            fontSize: '20px',
            textAlign: 'center',
            textTransform: 'uppercase',
            margin: '0 0 10px 0'
        }}
      >Stations</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {stations.map(station => {
          const isSelected = selectedStation === station;

          return (
            <button 
              key={station}
              onClick={() => {
                onStationSelect(isSelected ? null : station);
              }}
              style={{
                backgroundColor: isSelected ? '#007bff' : '#4a4a4a',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                padding: '8px 16px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
            {station}
          </button>
          );
        })}
      </div>
    </nav>
  );
}