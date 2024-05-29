import './ReviewedList.css';
import ReviewedItem from "./ReviewedItem";

const ReviewedList = (props) => {
    return (
        <div className="reviewed-list-base-pro rounderCorn dropShadow">
            <p className="reviewed-list-title-pro">Reviewed List</p>
            <ReviewedItem isSelected={true} student="random name" level="LEVEL 1" exercise="EXERCISE 1" date="01-09-2024" grade="GOOD"/>
            <ReviewedItem isSelected={false} student="randomfokljdkjla" level="LEVEL 1" exercise="EXERCISE 1" date="01-09-2024" grade="GOOD"/>
            <ReviewedItem isSelected={false} student="randomfokljdkjla" level="LEVEL 1" exercise="EXERCISE 1" date="01-09-2024" grade="GOOD"/>
            <ReviewedItem isSelected={false} student="randomfokljdkjla" level="LEVEL 1" exercise="EXERCISE 1" date="01-09-2024" grade="RETRY"/>
            <ReviewedItem isSelected={false} student="randomfokljdkjla" level="LEVEL 1" exercise="EXERCISE 1" date="01-09-2024" grade="RETRY"/>
        </div>
    );
}

export default ReviewedList;