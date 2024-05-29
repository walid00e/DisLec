import './ReviewedItem.css'
import img from "../../../Assets/img/2148729672.jpg";
import ReactAudioPlayer from "react-audio-player";

const ReviewedItem = (props) => {
    return (
        <div className="recording-item-details-container">
            <div className="recording-item-img-container-pro">
                <img src={img} className="recording-item-img-pro" alt=""/>
            </div>
            <div className="recording-student-data-pro">
                <p className="recording-student-data-name-pro">{props.student}</p>
                <p className="recording-student-data-extras-pro">Extras Lorem</p>
            </div>
            <div className="recording-current-level-pro">
                <p className="recording-current-level-text-pro">{props.level}</p>
            </div>
            <div className="recording-current-exercise-pro">
                <p className="recording-current-exercise-text-pro">{props.exercise}</p>
            </div>
            <div className="recording-current-date-pro">
                <p className="recording-current-date-text-pro">{props.date}</p>
            </div>
            <div className="recording-current-grade-pro">
                <p className={props.grade === "GOOD" ? "recording-current-grade-text-good-pro" : "recording-current-grade-text-retry-pro"}>{props.grade}</p>
            </div>
            <div className="recording-item-data-container-pro">
                <ReactAudioPlayer className="audio-player-pro" controls/>
            </div>
        </div>
    );
}

export default ReviewedItem;