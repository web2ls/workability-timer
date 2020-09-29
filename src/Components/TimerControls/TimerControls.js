import playIcon from '../../public/images/play-icon.svg';
import stopIcon from '../../public/images/stop-icon.svg';
import pauseIcon from '../../public/images/pause-icon.svg';
import './TimerControls.css';

const TimerControls = ({ startTimer, stopTimer, pauseTimer }) => {
    return (
        <div class='timer-controls'>
            <div onClick={stopTimer}>
                <img src={stopIcon}></img>
            </div>
            <div onClick={startTimer}>
                <img src={playIcon}></img>
            </div>
            <div onClick={pauseTimer}>
                <img src={pauseIcon}></img>
            </div>
        </div>
    )
};

export default TimerControls;