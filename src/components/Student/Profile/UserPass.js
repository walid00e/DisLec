import './UserPass.css'
import img from '../../../Assets/icons/iconmonstr-lock-30-mod.svg'

function UserPass() {
    return (
        <div className="user-pass-base rounderCorn dropShadow">
            <div className="user-pass-base-container">
                <div className="user-pass-base-image-container">
                    <img src={img} className="user-pass-base-image" />
                </div>
                <button className="user-pass-base-button">Change Password</button>
            </div>
        </div>
    );
}

export default UserPass;