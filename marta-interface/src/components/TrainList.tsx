import { useState, useEffect } from 'react';
import Train from './Train';

// fetch and display all trains for a given line
interface TrainData { // might be lowercase 'T'
    TRAIN_ID: string;
    DESTINATION: string;
    DIRECTION: string;
    LINE: string;
    STATION: string;
    WAITING_TIME: string;
    DELAY: string;
}

interface TrainListProps {
    color: string;
    selectedStation: string | null;
}

export default function TrainList({ color, selectedStation }: TrainListProps) {
    const [trains, setTrains] = useState<TrainData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // hook fetches data whenever the 'color' prop changes
    useEffect(() => {
        setIsLoading(true); // before fetch
        const apiUrl = `https://midsem-bootcamp-api.onrender.com/arrivals/${color}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const uniqueTrainsMap = new Map();
                data.forEach((train: TrainData) => {
                uniqueTrainsMap.set(train.TRAIN_ID, train);
                });
                const uniqueTrainsArray = Array.from(uniqueTrainsMap.values());
                setTrains(uniqueTrainsArray);
                
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch train data:", error);
                setIsLoading(false);
            });
    }, [color]);

    // for testing
    console.log("Filtering for station:", selectedStation);

    const filteredTrains = selectedStation ? trains.filter(train => {
        if (!train.DESTINATION) {
            return false;
        }

        return selectedStation.toUpperCase().includes(train.DESTINATION.toUpperCase());
    })
    : trains;

    if (isLoading) {
        return <p>Loading train data...</p>;
    }
    
    return (
        <div>
            <h3>Trains for {color.charAt(0).toUpperCase() + color.slice(1)} Line</h3>
            {filteredTrains.length === 0 && !isLoading && (
                <p>No current trains match.</p>
            )}

            {filteredTrains.map(train => (
                <Train 
                key={train.TRAIN_ID}
                {...train}
                />
            ))}
        </div>
    );
}

