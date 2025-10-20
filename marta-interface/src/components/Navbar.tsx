import { useState, useEffect } from 'react';

interface NavbarProps {
    color: string;
}

interface Station {
    STATION: string;
}


export default function Navbar({ color }: NavbarProps) {
    const [stations, setStations] = useState<Station[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      const apiUrl = `https://midsem-bootcamp-api.onrender.com/stations/${color}`;

      fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
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
          <button key={station.STATION}>
            {station.STATION}
          </button>
        ))}
      </div>
    </nav>
  );
}