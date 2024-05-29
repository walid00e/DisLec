import './SpecialistInfo.css';
import img from '../../../Assets/img/2148729672.jpg'

function SpecialistInfo(props){
    return(
        <div className="specialist-info-base rounderCorn dropShadow">
            <div className="specialist-info-user-img-container">
                <img src={img} alt="Profile Picture" className="specialist-profile-img"/>
                <p className="specialist-info-name">LOREM IPSUM</p>
                <p className="specialist-info-sub-name">Specialist</p>
            </div>
        </div>
    );
}

export default SpecialistInfo;