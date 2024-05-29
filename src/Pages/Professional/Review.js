import TodoGrid from "../../components/Professional/Grids/TodoGrid";
import NavigationUserPro from "../../components/Professional/Navigation/NavigationUserPro";
import RecordingList from "../../components/Professional/Todo/RecordingList";
import RecordingPreviewContainer from "../../components/Professional/Todo/RecordingPreviewContainer";
import RecordingContainer from "../../components/Professional/Todo/RecordingContainer";
import RecordingResult from "../../components/Professional/Todo/RecordingResult";
import Base from "../../components/Global/Base";
import ReviewedList from "../../components/Professional/Review/ReviewedList";

const Review = () => {
    return (
        <Base>
            <TodoGrid>
                <NavigationUserPro/>
                <ReviewedList/>
            </TodoGrid>
        </Base>
    );
}

export default Review;