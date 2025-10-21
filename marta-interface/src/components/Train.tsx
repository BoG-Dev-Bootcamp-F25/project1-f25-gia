import './styles/Train.css';
import martaLogo from './styles/MartaLogo.png';

interface TrainProps {
    DESTINATION: string;
    DIRECTION: string;
    LINE: string;
    HEAD_SIGN: string;
    WAITING_TIME: string;
    DELAY: string;
}

export default function Train(props: TrainProps) {
    const isDelayed = props.DELAY !== "T0S";

    const currentStation = props.HEAD_SIGN;
    const destination = props.DESTINATION;

    const hasArrived = destination && currentStation && destination.toUpperCase() === currentStation.toUpperCase();

    let headerText;
    // checks if arrived, which causes 'airport -> airport' bug
    if (hasArrived) {
        headerText = destination;
    } else {
        headerText = `${currentStation} → ${destination}`;
    }

    return (
        <div className="train-card">

        <img src={martaLogo} alt="MARTA logo" className="marta-icon" />

            <div className="line-info">
                <div className="line-swatch" style={{ backgroundColor: props.LINE.toLowerCase() }}></div>
                <span>{props.LINE}</span>
            </div>

            <div className="route-info">
                <h4>{headerText}</h4>
                <p className={`status ${hasArrived ? 'status-arrived' : (isDelayed ? 'status-delayed' : '')}`}>
                    {hasArrived ? 'Arrived' : (isDelayed ? 'Delayed' : 'On Time')}
                </p>
            </div>

            <div className="time-info">
                {hasArrived ? '0 min' : props.WAITING_TIME}
            </div>

        </div>
    );
}