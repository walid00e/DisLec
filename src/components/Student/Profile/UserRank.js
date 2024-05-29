import './UserRank.css'
import imgLevel from "../../../Assets/icons/level1.svg";

function UserRank() {
    return (
        <div className="user-rank-base rounderCorn dropShadow">
            <div className="user-stats-content-container">
                <p className="user-stats-title">Next Rank</p>
                <img src={imgLevel} className="user-stats-image" alt=""/>
                <p className="user-stats-name">LEVEL 1 RANK</p>
            </div>
        </div>
    );
}

export default UserRank;