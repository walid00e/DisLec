import './LeaderboardRankUser.css';

function LeaderboardRankUser(props) {
    return (
        <div className="leader-board-user">
            <div className="leader-board-user-img">
                <img src={props.img} alt="Profile Picture" className="profile-img-rank"/>
            </div>
            <div className="leader-board-user-data">
                <p className="leader-board-user-name">{props.name}</p>
                <p className="leader-board-user-extra">{props.extras}</p>
            </div>
            <div className="leader-board-user-rank">
                <p className="leader-board-user-rank-number">{props.rank}</p>
            </div>
        </div>
    );
}

export default LeaderboardRankUser;