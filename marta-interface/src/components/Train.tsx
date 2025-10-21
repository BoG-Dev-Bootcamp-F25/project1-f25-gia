import './styles/Train.css';
import martaLogo from './styles/MartaLogo.png';

interface TrainProps {
    DESTINATION: string;
    DIRECTION: string;
    LINE: string;
    STATION: string;
    WAITING_TIME: string;
    DELAY: string;
}

export default function Train(props: TrainProps) {
    const isDelayed = props.DELAY !== "T0S";

    return (
        <div className="train-card">
          <img src={martaLogo} alt="MARTA logo" className="marta-icon" />
    
          <div className="line-info">
            <div className="line-swatch" style={{ backgroundColor: props.LINE.toLowerCase() }}></div>
            <span>{props.LINE}</span>
          </div>
    
          <div className="route-info">
            <h4>{props.STATION} → {props.DESTINATION}</h4>
            
            <p className={`status ${isDelayed ? 'status-delayed' : ''}`}>
              {isDelayed ? 'Delayed' : 'On Time'}
            </p>
          </div>
    
          <div className="time-info">
            {props.WAITING_TIME}
          </div>
        </div>
      );
}