import { useState } from 'react';
import TrainList from '../components/TrainList';
import NavBar from '../components/Navbar';

export default function LinesPage() {
    const [currColor, setCurrColor] = useState('gold');
    const lineColors = ['gold', 'red', 'green', 'blue'];
  
    return (
      <div>
        <h1>MARTA Train Tracker</h1>

        <div>
            <p>Select a line:</p>
            {lineColors.map(color => (
                <button
                    key={color}
                    onClick={() => setCurrColor(color)}
                    style={{
                        backgroundColor: currColor === color ? color : 'grey',
                        color: 'white',
                        margin: '5px',
                        border: '1px solid black'
                    }}
                >
                    {color.toUpperCase()}
                </button>
            ))}
        </div>

        <hr />
        <NavBar color={currColor} /> {/* data={stationData} /> */}
        <TrainList color={currColor} /> {/* data={trainData} /> */}
      </div>
    );
}