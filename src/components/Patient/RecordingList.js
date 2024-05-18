import './RecordingList.css';
import RecordingItem from "./RecordingItem";

function RecordingList(){
    return(
        <div className="recording-list-base rounderCorn dropShadow">
            <p className="recording-list-title">Recording List</p>
            <RecordingItem specialist="LOREM IPSUM" date="01-04-2024" level="LEVEL 4" exercise="EXERCISE 5" grade="GOOD"/>
            <RecordingItem specialist="LOREM IPSUM" date="01-04-2024" level="LEVEL 4" exercise="EXERCISE 5" grade="GOOD"/>
            <RecordingItem specialist="LOREM IPSUM" date="01-04-2024" level="LEVEL 4" exercise="EXERCISE 5" grade="GOOD"/>
            <RecordingItem specialist="LOREM IPSUM" date="01-04-2024" level="LEVEL 4" exercise="EXERCISE 5" grade="GOOD"/>
            <RecordingItem specialist="LOREM IPSUM" date="01-04-2024" level="LEVEL 4" exercise="EXERCISE 5" grade="GOOD"/>
            <RecordingItem specialist="LOREM IPSUM" date="01-04-2024" level="LEVEL 4" exercise="EXERCISE 5" grade="GOOD"/>
        </div>
    );
}

export default RecordingList;