import './TimerControls.css';

const TimerControls = ({ startTimer }) => {
    return (
        <div class='timer-controls'>
            <div>
                <img src='public/images/stop-icon.svg'></img>
            </div>
            <div onClick={startTimer}>
                <img src='public/images/play-icon.svg'></img>
            </div>
            <div>
                <img src='public/images/pause-icon.svg'></img>
            </div>
        </div>
    )
};

export default TimerControls;