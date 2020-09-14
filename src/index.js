import './style';
import { Component } from 'preact';

export default class App extends Component {
	state = {
		timer: '00 : 00 : 00'
	};

	render() {
		return (
			<div>
				<div class='blackground'></div>

				<div class='content'>
					<div class='controls'>
						<div class='timer-value'>
							<div class='timer-value-label'>Enter your flow run value:</div>
							<div class='timer-value-input'>
								<input type='text'></input>
							</div>
						</div>
					</div>
					<div class='timer-controls'>
						<div>
							<img src='public/images/stop-icon.svg'></img>
						</div>
						<div>
							<img src='public/images/play-icon.svg'></img>
						</div>
						<div>
							<img src='public/images/pause-icon.svg'></img>
						</div>
					</div>

					<div class='timer'>{this.state.timer}</div>
				</div>

			</div>
		);
	}
}
