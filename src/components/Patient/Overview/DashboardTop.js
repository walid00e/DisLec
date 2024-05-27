import './DashboardTop.css';

function DashboardTop(props) {
    return (
        <div className="dashboard-top-base rounderCorn dropShadow">
            <div className="dashboard-top-container">
                <span className="dashboard text-dark">Dashboard</span>
                <img src={props.imgSrc} alt="Profile Picture" className="profile-img"/>
            </div>
        </div>
    );
}

export default DashboardTop