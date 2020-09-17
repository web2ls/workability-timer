import './TimerControls.css';

const TimerControls = ({ startTimer, stopTimer, pauseTimer }) => {
    return (
        <div class='timer-controls'>
            <div onClick={stopTimer}>
                <img src='public/images/stop-icon.svg'></img>
            </div>
            <div onClick={startTimer}>
                <img src='public/images/play-icon.svg'></img>
            </div>
            <div onClick={pauseTimer}>
                <img src='public/images/pause-icon.svg'></img>
            </div>
        </div>
    )
};

export default TimerControls;