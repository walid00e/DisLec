import './RecordingItem.css';
import img from '../../../Assets/img/2148729672.jpg';
import ReactAudioPlayer from "react-audio-player";

function RecordingItem(props) {
    return (
        <div className="recording-item-base">
            <div className="recording-item-img-container">
                <img src={img} className="recording-item-img" alt=""/>
            </div>
            <div className="recording-item-data-container">
                <div className="recording-item-data-top-container">
                    <div className="recording-specialist-data">
                        <p className="recording-specialist-data-name">{props.specialist}</p>
                        <p className="recording-specialist-data-extras">Extras Lorem</p>
                    </div>
                    <div className="recording-current-date">
                        <p className="recording-current-date-text">{props.date}</p>
                    </div>
                    <div className="recording-current-level">
                        <p className="recording-current-level-text">{props.level}</p>
                    </div>
                    <div className="recording-current-exercise">
                        <p className="recording-current-exercise-text">{props.exercise}</p>
                    </div>
                    <div className="recording-current-grade">
                        <p className="recording-current-grade-text-good">{props.grade}</p>
                    </div>
                </div>
                <div className="recording-item-data-bottom-container">
                    <ReactAudioPlayer className="audio-player" controls/>
                </div>
            </div>
        </div>
    );
}

export default RecordingItem;