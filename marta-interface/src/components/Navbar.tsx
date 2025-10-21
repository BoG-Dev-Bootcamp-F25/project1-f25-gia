import { useState, useEffect } from 'react';
import './styles/NavBar.css';

interface NavBarProps {
    color: string;
    selectedStation: string | null;
    onStationSelect: (station: string | null) => void;
}

export default function NavBar({ color, selectedStation, onStationSelect }: NavBarProps) {
    // placeholder
    const stationsByLine: { [key: string]: string[] } = {
        gold: ["Doraville", "Chamblee", "Brookhaven", "Lenox", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"],
        red: ["North Springs", "Sandy Springs", "Dunwoody", "Medical Center", "Buckhead", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"],
        blue: ["Hamilton E. Holmes", "West Lake", "Ashby", "Vine City", "GWCC/CNN Center", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood", "East Lake", "Decatur", "Avondale", "Kensington", "Indian Creek"],
        green: ["Bankhead", "Ashby", "Vine City", "GWCC/CNN Center", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood", "Candler Park", "East Lake", "Decatur", "Avondale", "Kensington", "Indian Creek"]
    };
    
    const stations = stationsByLine[color] || [];

    return (
        <div className="station-sidebar">
        <h4>Select your starting station</h4>

        <div 
            className={`station-item ${selectedStation === null ? 'active' : ''}`}
            onClick={() => onStationSelect(null)}
        >
            All Stations
        </div>

        {stations.map(station => {
            const isSelected = selectedStation === station;
            return (
            <div 
                key={station}
                className={`station-item ${isSelected ? 'active' : ''}`}
                onClick={() => onStationSelect(station)}
            >
                {station}
            </div>
            );
        })}
        </div>
    );
}