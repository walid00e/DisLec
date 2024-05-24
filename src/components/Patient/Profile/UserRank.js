import './UserRank.css'
import imgLevel from "../../../Assets/icons/level1.svg";

function UserRank() {
    return (
        <div className="user-rank-base rounderCorn dropShadow">
            <div className="rank-stats-content-container">
                <p className="rank-stats-title">Next Rank</p>
                <img src={imgLevel} className="rank-stats-image" alt=""/>
                <p className="rank-stats-name">LEVEL 1 RANK</p>
            </div>
        </div>
    );
}

export default UserRank;