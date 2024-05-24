import './ExercisesStats.css';

function ExercisesStats(props) {
    return(
        <div className="exercises-stats-base rounderCorn dropShadow">
            <p className="exercises-stats-title">Finished Exercises</p>
            <div className="exercises-stats-container">
                <p className="exercises-stats-value">258</p>
                <p className="exercises-stats-unit">EXERCISE</p>
            </div>
        </div>
    );
}

export default ExercisesStats;