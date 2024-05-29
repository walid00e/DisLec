import './RecordingResult.css';
import retryIcon from '../../../Assets/icons/iconmonstr-redo-7.svg';
import goodIcon from '../../../Assets/icons/iconmonstr-check-mark-lined.svg';

const RecordingResult = () => {
    return (
        <div className="recording-result-container">

            <div className="recording-result-retry dropShadow">
                <img className="recording-result-btn-icon" src={retryIcon} alt=""/>
                <p className="recording-result-btn-text">Retry</p>
            </div>
            <div className="recording-result-good dropShadow">
                <img className="recording-result-btn-icon" src={goodIcon} alt=""/>
                <p className="recording-result-btn-text">Pass</p>
            </div>
        </div>
    );
}

export default RecordingResult;