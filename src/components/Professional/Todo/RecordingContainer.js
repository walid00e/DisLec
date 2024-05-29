import './RecordingContainer.css'
import record_icon from '../../../Assets/icons/iconmonstr-microphone-thin.svg';
import record_pause from '../../../Assets/icons/media-control-pause.png';
import recording_icon from '../../../Assets/icons/recording-icon.svg';

const RecordingContainer = () => {
    return (
        <div className="recording-container">
            <div className="recording-info rounderCorn dropShadow">
                <p className="recording-info-title">Recording</p>
                <div className="recording-info-container">
                    <img src={recording_icon} className="recording-info-img" alt=""/>
                </div>
                <p className="recording-info-duration">4:30</p>
            </div>
            <div className="recording-record-btn rounderCorn dropShadow">
                <img src={record_icon} className="recording-icon" alt=""/>
                <p className="recording-text">Record</p>
            </div>
            <div className="recording-pause-btn rounderCorn dropShadow">
                <img src={record_pause} className="recording-icon" alt=""/>
                <p className="recording-text">Stop</p>
            </div>
        </div>
    );
}

export default RecordingContainer;