import './HoursStats.css';

function HoursStats(props) {
    return(
        <div className="hours-stats-base rounderCorn dropShadow">
            <p className="hours-stats-title">Hours Spent</p>
            <div className="hours-stats-container">
                <p className="hours-stats-value">49</p>
                <p className="hours-stats-unit">HOUR</p>
            </div>
        </div>
    );
}

export default HoursStats;