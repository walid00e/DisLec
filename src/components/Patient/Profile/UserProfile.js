import './UserProfile.css'
import img from "../../../Assets/img/2148729672.jpg";

function UserProfile() {
    return (
        <div className="user-profile-base rounderCorn dropShadow">
            <div className="user-profile-info-user-img-container">
                <img src={img} alt="Profile Picture" className="user-profile-profile-img"/>
                <p className="user-profile-info-name">LOREM IPSUM</p>
                <p className="user-profile-info-sub-name">Specialist</p>
            </div>
        </div>
    );
}

export default UserProfile;