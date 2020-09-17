import './style';
import { Component } from 'preact';
import Blackground from './Components/Blackground/Blackground';
import FlowRun from './Components/FlowRun/FlowRun';
import TimerControls from './Components/TimerControls/TimerControls';
import Timer from './Components/Timer/Timer';

export default class App extends Component {
	state = {
		timer: '00 : 00 : 00',
		flowRun: 30,
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

	getHours = (minutes) => {
		if (minutes % 60 === 0) {
			return this.setLeadingZero(minutes / 60)
		}

		const remainder = minutes % 60;
		const hoursValue = (minutes - remainder) / 60;
		return this.setLeadingZero(hoursValue);
	}

	getRemainderMinutes = (minutes) => {
		const remainder = minutes % 60;
		return Math.floor(this.setLeadingZero(remainder));
	}

	getSeconds = (seconds) => {
		const remainder = seconds % 3600;
		return Math.floor(this.setLeadingZero(remainder));
	}

	setLeadingZero = (time) => {
		if (time.toString().length < 2) {
			return `0${time}`;
		};
		return time;
	}

	startTimer = () => {
		let flowRunInMs = this.state.flowRun * 60 * 1000;
		setInterval(() => {
			flowRunInMs -= 1000;
			const hours = this.getHours(flowRunInMs / 1000 / 60);
			const minutes = this.getRemainderMinutes(flowRunInMs / 1000 / 60);
			const seconds = this.getSeconds(flowRunInMs / 1000);
			this.setState({ timer: `${hours} : ${minutes} : ${seconds}` });
		}, 1000);
	}

	render() {
		return (
			<div>
				<Blackground />

				<div class='content'>
					<div class='controls'>
						<FlowRun
							flowRun={this.state.flowRun}
							onChangeFlowRun={this.onChangeFlowRun}
							checkIsFlowRunValueValid={this.checkIsFlowRunValueValid} />
					</div>

					<TimerControls startTimer={this.startTimer} />

					<Timer timer={this.state.timer} />
				</div>

			</div>
		);
	}
}
