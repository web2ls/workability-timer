import './style';
import { Component } from 'preact';

export default class App extends Component {
	render() {
		return (
			<div>
				<div class='blackground'></div>

				<div class='content'>
					<div class='controls'>
						<div class='timer-value'>set Flow run</div>
					</div>
					<div class='timer-controls'>
						<div>
							<img src='public/images/stop-icon.svg'></img>
						</div>
						<div>pause flow</div>
						<div>start flow</div>
					</div>

					<div class='timer'>08:45:45</div>
				</div>

			</div>
		);
	}
}
