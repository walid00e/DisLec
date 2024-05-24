import './DashboardTop.css'
import'../../../colors.css'
import img from '../../../Assets/img/2148244811.jpg'

function DashboardTop() {
    return (
        <div className="dashboard-top-base rounderCorn dropShadow">
            <div className="dashboard-top-container">
                <span className="dashboard text-dark">Dashboard</span>
                <img src={img} alt="Profile Picture" className="profile-img"/>
            </div>
        </div>
    );
}

export default DashboardTop