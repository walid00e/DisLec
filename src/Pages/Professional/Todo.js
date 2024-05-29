import Base from "../../components/Global/Base";
import NavigationUserPro from "../../components/Professional/Navigation/NavigationUserPro";
import TodoGrid from "../../components/Professional/Grids/TodoGrid";
import RecordingList from "../../components/Professional/Todo/RecordingList";
import RecordingPreviewContainer from "../../components/Professional/Todo/RecordingPreviewContainer";
import RecordingContainer from "../../components/Professional/Todo/RecordingContainer";
import RecordingResult from "../../components/Professional/Todo/RecordingResult";
import {useEffect, useState} from "react";
import {getImgData, getJsonData} from "../../Utils/apiUtils"
import RecordingItem from "../../components/Professional/Todo/RecordingItem";
import {dateToFormated, secondsToString} from "../../Utils/timeUtils";

function Todo() {

    let [isSuccess, setIsSuccess] = useState(false);
    let [errorLog, setErrorLog] = useState("Loading...");
    const [recordingItems, setRecordingItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // getting user data
                const professionalData = await getJsonData("http://localhost:3001/api/professional/user", localStorage.getItem("userId"));
                if (professionalData[0]) {
                    const recordingIds = professionalData[1].essayToReview.split('|');
                    const essayItems = [];
                    let essayData;
                    let studentData;
                    let userData;
                    let userImgData;
                    let rankData;
                    let exerciseData;
                    for (const item of recordingIds) {
                        essayData = await getJsonData("http://localhost:3001/api/essay", item);
                        if (essayData[0]) {
                            userData = await getJsonData("http://localhost:3001/api/user", essayData[1].student);
                            if (userData[0]) {
                                userImgData = await getImgData("http://localhost:3001/api/image/profile", userData[1].profilePicture);
                                if (userImgData[0]) {
                                    studentData = await getJsonData("http://localhost:3001/api/student/user", essayData[1].student);
                                    if (studentData[0]) {
                                        rankData = await getJsonData("http://localhost:3001/api/rank", studentData[1].rank);
                                        if (rankData[0]) {
                                            setRecordingItems((prevRecordingItems) => {
                                                return [
                                                    ...prevRecordingItems,
                                                    <RecordingItem
                                                        isSelected={false}
                                                        student={userData[1].firstName + " " + userData[1].lastName}
                                                        level={rankData[1].name}
                                                        exercise="EXERCISE 1"
                                                        duration={secondsToString(essayData[1].duration)}
                                                        date={essayData[1].date}/>
                                                ];
                                            });
                                            console.log(recordingItems);
                                        }
                                    }
                                }
                            }

                        }
                    }
                    console.log(recordingItems);
                }
            } catch (error) {

            }
        }
        fetchData();
    }, []);

    return (
        <Base>
            <TodoGrid>
                <NavigationUserPro/>
                <RecordingList>
                    {
                        recordingItems
                    }
                </RecordingList>
                <RecordingPreviewContainer/>
                <RecordingContainer/>
                <RecordingResult/>
            </TodoGrid>
        </Base>
    );
}

export default Todo;