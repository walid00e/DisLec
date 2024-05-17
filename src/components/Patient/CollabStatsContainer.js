import './CollabStatsContainer.css';

function CollabStatsContainer(){
    return(
        <div className="collab-stats-container-base">
            <div className="good-grade-stats-container rounderCorn dropShadow">
                <p className="collab-stats-title">Good Scores</p>
                <div className="collab-stats-container">
                    <p className="collab-stats-value">49</p>
                </div>
            </div>
            <div className="bad-grade-stats-container rounderCorn dropShadow">
                <p className="collab-stats-title">Bad Scores</p>
                <div className="collab-stats-container">
                    <p className="collab-stats-value">11</p>
                </div>
            </div>
            <div className="total-grade-stats-container rounderCorn dropShadow">
                <p className="collab-stats-title">Total</p>
                <div className="collab-stats-container">
                    <p className="collab-stats-value">60</p>
                </div>
            </div>
        </div>
    );
}

export default CollabStatsContainer;