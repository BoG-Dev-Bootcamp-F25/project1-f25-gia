import { useState } from 'react';

export default function LinesPage() {
    // initialize some currColor state
  
    return (
      <div>
        // YOUR JSX CODE
        // start with gold as default
        const [currColor, setCurrColor] = useState('gold');

        <h1>MARTA Train Tracker</h1>
        <p>Currently showing the <strong>{currColor.toUpperCase()}</strong> line.</p>

        <NavBar color={currColor} data={stationData} />
        <TrainList color={currColor} data={trainData} />
        // YOUR JSX CODE
      </div>
    );
}