import './RankStats.css';

function RankStats(props) {
    return(
        <div className="rank-stats-base rounderCorn dropShadow">
            <div className="rank-stats-content-container">
                <img src={props.imgSrc} className="rank-stats-image" alt=""/>
                <p className="rank-stats-name">{props.name}</p>
                <p className="rank-stats-desc">{props.desc}</p>
            </div>
        </div>
    );
}

export default RankStats;