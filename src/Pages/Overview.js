import Base from "../components/Base";
import NavigationUser from "../components/Patient/Overview/NavigationUser";
import Dashboard from "../components/Patient/Grids/Dashboard";
import DashboardTop from "../components/Patient/Overview/DashboardTop";
import LeaderBoard from "../components/Patient/Overview/LeaderBoard";
import RankStats from "../components/Patient/Overview/RankStats";
import ExercisesStats from "../components/Patient/Overview/ExercisesStats";
import HoursStats from "../components/Patient/Overview/HoursStats";
import ActivityStats from "../components/Patient/Overview/ActivityStats";
import FocusStats from "../components/Patient/Overview/FocusStats";
import {useEffect, useState} from "react";
import {json} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";


function Overview() {

    let [rankName, setRankName] = useState("");
    let [rankDesc, setRankDesc] = useState("");
    let [rankImgSrc, setRankImgSrc] = useState("");
    let [finishedExercises, setFinishedExercises] = useState(0);
    let [hoursSpent, setHoursSpent] = useState(0);
    let [activityStatsData, setActivityStatsData] = useState({});
    let [focusStatsData, setFocusStatsData] = useState({});
    let [userProfilePicture, setUserProfilePicture] = useState("")


    useEffect(() => {
        const getData = async (endPoint, key, type) => {
            try {
                // setting headers options
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
                // getting user data
                const dataResponse = await fetch(`${endPoint}/${key}`, options);
                // checking for response status
                if (!dataResponse.ok) {
                    return [false, {}];
                }
                // getting data
                if (type === "json") {
                    const data = await dataResponse.json();
                    // checking for status
                    if (data.status === 1) {
                        return [true, data.data];
                    } else {
                        // todo: add this
                    }
                } else {
                    if (type === "img") {
                        const data = await dataResponse.blob();
                        return [true, data];
                    }
                }

                return [false, {}];
            } catch (err) {

            }
        }
        const fetchData = async () => {
            try {
                // getting user data
                const userData = await getData("http://localhost:3001/api/user", localStorage.getItem("userId"), "json");
                if (userData[0]) {
                    const userImgData = await getData("http://localhost:3001/api/image/profile", userData[1].profilePicture, "img");
                    if (userImgData[0]) {
                        const studentData = await getData("http://localhost:3001/api/student/user", userData[1]._id, "json");
                        if (studentData[0]) {
                            const rankData = await getData("http://localhost:3001/api/rank", studentData[1].rank, "json");
                            if (rankData[0]) {
                                // getting rank img
                                const rankImgData = await getData("http://localhost:3001/api/image/utils", rankData[1].img, "img");
                                if (rankImgData[0]) {
                                    // all data has been correctly fetched
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
                <DashboardTop imgSrc={userProfilePicture}/>
                <LeaderBoard/>
                <RankStats name={rankName} desc={rankDesc} imgSrc={rankImgSrc}/>
                <ExercisesStats value={finishedExercises}/>
                <HoursStats value={hoursSpent}/>
                <ActivityStats data={activityStatsData}/>
                <FocusStats data={focusStatsData}/>
            </Dashboard>
        </Base>
    );
}

export default Overview;