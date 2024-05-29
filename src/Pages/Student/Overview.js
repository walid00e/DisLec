import Base from "../../components/Global/Base";
import NavigationUser from "../../components/Student/Navigation/NavigationUser";
import Dashboard from "../../components/Student/Grids/Dashboard";
import DashboardTop from "../../components/Student/Overview/DashboardTop";
import LeaderBoard from "../../components/Student/Overview/LeaderBoard";
import RankStats from "../../components/Student/Overview/RankStats";
import ExercisesStats from "../../components/Student/Overview/ExercisesStats";
import HoursStats from "../../components/Student/Overview/HoursStats";
import ActivityStats from "../../components/Student/Overview/ActivityStats";
import FocusStats from "../../components/Student/Overview/FocusStats";
import {useEffect, useState} from "react";
import DataError from "../../components/Global/DataError";
import {getImgData, getJsonData} from "../../Utils/apiUtils";


function Overview() {

    let [rankName, setRankName] = useState("No Data Found");
    let [rankDesc, setRankDesc] = useState("");
    let [rankImgSrc, setRankImgSrc] = useState("");
    let [finishedExercises, setFinishedExercises] = useState(0);
    let [hoursSpent, setHoursSpent] = useState(0);
    let [activityStatsData, setActivityStatsData] = useState({});
    let [focusStatsData, setFocusStatsData] = useState({});
    let [userProfilePicture, setUserProfilePicture] = useState("")
    let [isSuccess, setIsSuccess] = useState(false);
    let [errorLog, setErrorLog] = useState("Loading...");


    useEffect(() => {
        const fetchData = async () => {
            try {
                // getting user data
                const userData = await getJsonData("http://localhost:3001/api/user", localStorage.getItem("userId"));
                if (userData[0]) {
                    const userImgData = await getImgData("http://localhost:3001/api/image/profile", userData[1].profilePicture);
                    if (userImgData[0]) {
                        const studentData = await getJsonData("http://localhost:3001/api/student/user", userData[1]._id);
                        if (studentData[0]) {
                            const rankData = await getJsonData("http://localhost:3001/api/rank", studentData[1].rank);
                            if (rankData[0]) {
                                // getting rank img
                                const rankImgData = await getImgData("http://localhost:3001/api/image/utils", rankData[1].img);
                                if (rankImgData[0]) {
                                    // all data has been correctly fetched
                                    setIsSuccess(true);
                                    // setting user data
                                    setUserProfilePicture(URL.createObjectURL(userImgData[1]));
                                    // setting student data stuff
                                    setFinishedExercises(studentData[1].finishedExercises);
                                    setHoursSpent(studentData[1].hoursSpent);
                                    setActivityStatsData(studentData[1].activityFocus.activityData);
                                    setFocusStatsData(studentData[1].exercisesFocus.exercisesData);
                                    // setting rank data
                                    setRankName(rankData[1].name);
                                    setRankDesc(rankData[1].description);
                                    setRankImgSrc(URL.createObjectURL(rankImgData[1]));
                                }
                            }
                        }
                    }
                }
            } catch (err) {

            }
        };
        fetchData();
    }, []);

    return (
        <Base>
            <Dashboard>
                <NavigationUser/>
                {
                    isSuccess ? (
                        <>
                            <DashboardTop imgSrc={userProfilePicture}/>
                            <LeaderBoard/>
                            <RankStats name={rankName} desc={rankDesc} imgSrc={rankImgSrc}/>
                            <ExercisesStats value={finishedExercises}/>
                            <HoursStats value={hoursSpent}/>
                            <ActivityStats data={activityStatsData}/>
                            <FocusStats data={focusStatsData}/>
                        </>
                    ) : (
                        <DataError msg={errorLog}/>
                    )
                }

            </Dashboard>
        </Base>
    )
        ;
}

export default Overview;