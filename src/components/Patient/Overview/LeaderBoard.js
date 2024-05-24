import './LeaderBoard.css';
import LeaderboardRankUser from "./LeaderboardRankUser";
import img from "../../../Assets/img/2148244811.jpg";

function LeaderBoard(props) {
    return(
        <div className="leader-board-base  rounderCorn dropShadow">
            <p className="leader-board-stats-title">Leaderboard</p>
            <div className="leader-board-stats-container">
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={1}/>
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={2}/>
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={3}/>
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={4}/>
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={5}/>
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={6}/>
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={7}/>
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={8}/>
                <LeaderboardRankUser img={img} name="LOREM IPSUM" extras="Random Extras" rank={9}/>
            </div>
        </div>
    );
}

export default LeaderBoard;