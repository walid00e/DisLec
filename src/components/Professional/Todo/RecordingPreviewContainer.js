import './RecordingPreviewContainer.css';
import play_icon from "../../../Assets/icons/iconmonstr-media-control-48.svg";

const RecordingPreviewContainer = (props) => {
    return (
        <div className="recording-preview-container">
            <div className="recording-player-container rounderCorn dropShadow">

            </div>
            <div className="recording-player-control rounderCorn dropShadow">
                <img src={play_icon} className="control-icon" alt=""/>
                <p className="control-text">Play</p>
            </div>
            <div className="recording-player-volume rounderCorn dropShadow">

            </div>
        </div>
    );
}

export default RecordingPreviewContainer;