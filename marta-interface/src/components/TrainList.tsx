import { useState, useEffect } from 'react';
import Train from './Train';

// fetch and display all trains for a given line
interface TrainData { // might be lowercase 'T'
    TRAIN_ID: string;
    DESTINATION: string;
    DIRECTION: string;
    LINE: string;
    WAITING_TIME: string;
    DELAY: string;
}

interface TrainListProps {
    color: string;
}

export default function TrainList({ color }: TrainListProps) {
    const [trains, setTrains] = useState<TrainData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // hook fetches data whenever the 'color' prop changes
    useEffect(() => {
        setIsLoading(true); // before fetch
        const apiUrl = `https://midsem-bootcamp-api.onrender.com/arrivals/${color}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setTrains(data);
            setIsLoading(false); // retrieved the data
        })
        .catch(error => {
            console.error("Failed to fetch train data:", error);
            setIsLoading(false); // stop loading when error
        });
    }, [color]); 

    if (isLoading) {
        return <p>Loading train data...</p>;
    }
    
    return (
        <div>
        <h3>Trains for {color.charAt(0).toUpperCase() + color.slice(1)} Line</h3>
        {trains.map(train => (
            <Train 
            key={train.TRAIN_ID}
            {...train}
            />
        ))}
    </div>
  );
}