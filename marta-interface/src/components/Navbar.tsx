import { useState, useEffect } from 'react';

interface NavBarProps {
    color: string;
}

export default function NavBar({ color }: NavBarProps) {
    const [stations, setStations] = useState<Station[]>([]);
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
      <h4>Stations</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {stations.map(station => (
            <button key={station}
                style={{
                    backgroundColor: '#4a4a4a',
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
        ))}
      </div>
    </nav>
  );
}