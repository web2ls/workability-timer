import './style';
import { Component } from 'preact';
import Blackground from './Components/Blackground/Blackground';
import FlowRun from './Components/FlowRun/FlowRun';
import TimerControls from './Components/TimerControls/TimerControls';
import Timer from './Components/Timer/Timer';
import Notification from './Components/Notification/Notification';

export default class App extends Component {
	state = {
		timer: '00 : 00 : 00',
		flowRun: 30,
		remainTimeInSec: 0,
		timerInterval: null,
		notificationData: {
			isActive: false,
			message: '',
			type: null
		}
	};

	onChangeFlowRun = (event) => {
		this.setState({ flowRun: event.target.value });
	}

	checkIsFlowRunValueValid = (event) => {
		const newValue = event.target.value;
		if (newValue.length > 3) {
			console.log('too much numbers');
			this.setState({ flowRun: 0 });
			return;
		};

		if (isNaN(newValue)) {
			console.log('Is not a number value');
			this.setState({ flowRun: 0 });
			return;
		};
	}

	getHours = (seconds) => {
		const timeInMin = Math.floor(seconds / 60);
		if (timeInMin % 60 === 0) {
			return this.setLeadingZero(timeInMin / 60)
		}

		const remainder = timeInMin % 60;
		const hoursValue = (timeInMin - remainder) / 60;
		return this.setLeadingZero(hoursValue);
	}

	getRemainderMinutes = (seconds) => {
		const timeInMin = Math.floor(seconds / 60);
		const remainder = timeInMin % 60;
		return this.setLeadingZero(Math.floor(remainder));
	}

	getSeconds = (seconds) => {
		const fullPart = Math.floor(seconds / 60);
		const remainder = seconds - fullPart * 60;
		return this.setLeadingZero(remainder);
	}

	setLeadingZero = (time) => {
		if (time.toString().length < 2) {
			return `0${time}`;
		};
		return time;
	}

	startTimer = () => {
		if (this.state.timerInterval && this.state.remainTimeInSec) {
			this.setState({ notificationData: { isActive: true, message: 'Timer already started', type: 'info' } });
			this.clearNotificationMessage();
			return;
		}

		let timeInSec;
		if (this.state.remainTimeInSec) {
			timeInSec = this.state.remainTimeInSec;
		} else {
			timeInSec = this.state.flowRun * 60;
			this.setState({ remainTimeInSec: timeInSec });
		};

		const intervalId = setInterval(() => {
			timeInSec -= 1;
			this.setState({ remainTimeInSec: timeInSec });
			const hours = this.getHours(timeInSec);
			const minutes = this.getRemainderMinutes(timeInSec);
			const seconds = this.getSeconds(timeInSec);
			this.setState({ timer: `${hours} : ${minutes} : ${seconds}` });
			window.document.title = `${hours} : ${minutes} : ${seconds}`;

			if (timeInSec === 0) {
				this.stopTimer();
				window.document.title = 'Go to the break man!';
				this.setState({ notificationData: { isActive: true, message: 'Job well done dude!', type: null } });
				this.clearNotificationMessage();
			}
		}, 1000);

		this.setState({ timerInterval: intervalId })
	};

	stopTimer = () => {
		clearInterval(this.state.timerInterval);
		this.setState({ timer: '00 : 00 : 00', timerInterval: null, remainTimeInSec: 0 });
		window.document.title = 'Workability Timer'
	};

	pauseTimer = () => {
		clearInterval(this.state.timerInterval);
		this.setState({ timerInterval: null });
	}

	clearNotificationMessage = () => {
		const timeoutId = setTimeout(() => {
			this.setState({ notificationData: { isActive: false, message: '', type: null } });
			clearTimeout(timeoutId);
		}, 3000)
	};

	render() {
		return (
			<div>
				<Blackground />

				<Notification notificationData={this.state.notificationData} />

				<div class='content'>
					<div class='controls'>
						<FlowRun
							flowRun={this.state.flowRun}
							onChangeFlowRun={this.onChangeFlowRun}
							checkIsFlowRunValueValid={this.checkIsFlowRunValueValid} />
					</div>

					<TimerControls
						startTimer={this.startTimer}
						stopTimer={this.stopTimer}
						pauseTimer={this.pauseTimer} />

					<Timer timer={this.state.timer} />
				</div>

			</div>
		);
	}
}
