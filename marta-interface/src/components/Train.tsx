interface TrainProps {
    DESTINATION: string;
    DIRECTION: string;
    LINE: string;
    HEAD_SIGN: string;
    WAITING_TIME: string;
    DELAY: string;
}

export default function Train(props: TrainProps) {
    // train delayed or on time
    const status = props.DELAY === "TOS" ? "On Time" : "Delayed";
    const statusColor = status === "On Time" ? "green" : "red";

    const currentStation = props.HEAD_SIGN;
    const destination = props.DESTINATION;

    let headerText;

    // checks if arrived, which causes 'airport -> airport' bug
    if (destination && currentStation && destination.toUpperCase() === currentStation.toUpperCase()) {
        headerText = destination;
    } else {
        headerText = `${currentStation} → ${destination}`;
    }

    return (
        <div style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>
            <h4>{headerText}</h4>
            <p>Direction: {props.DIRECTION}</p>
            <p>Waiting Time: {props.WAITING_TIME}</p>
            <p>Status: <span style={{ color: statusColor  }}>{status}</span></p>
        </div>
    );
}