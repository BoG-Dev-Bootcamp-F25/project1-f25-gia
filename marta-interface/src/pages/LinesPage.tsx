export default function LinesPage() {
    // initialize some currColor state
  
    return (
      <div>
        // YOUR JSX CODE
        <NavBar color={currColor} data={stationData} />
        <TrainList color={currColor} data={trainData} />
        // YOUR JSX CODE
      </div>
    );
}