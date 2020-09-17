import './FlowRun.css';

const FlowRun = ({ flowRun, onChangeFlowRun, checkIsFlowRunValueValid }) => {
    return (
        <div class='timer-value'>
            <div class='timer-value-label'>Enter your flow run value:</div>
            <div class='timer-value-input'>
                <input
                    value={flowRun}
                    onInput={onChangeFlowRun}
                    onChange={checkIsFlowRunValueValid}>
                </input>
            </div>
        </div>
    )
};

export default FlowRun;