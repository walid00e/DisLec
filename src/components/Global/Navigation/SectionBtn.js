import './SectionBtn.css';

function SectionBtn(props) {
    const studNav = props.activated ? (
        <div className="section-btn-container section-btn-container-selected">
            <img src={props.icon} className="section-btn-icon-selected" alt=""/>
            <div className="section-btn-text-selected-student">{props.title}</div>
        </div>
    ) : (
        <div className="section-btn-container section-btn-container-non-selected-student">
            <img src={props.icon} className="section-btn-icon-non-selected" alt=""/>
            <div className="section-btn-text-non-selected">{props.title}</div>
        </div>
    );
    const proNav = props.activated ? (
        <div className="section-btn-container section-btn-container-selected">
            <img src={props.icon} className="section-btn-icon-selected" alt=""/>
            <div className="section-btn-text-selected-pro">{props.title}</div>
        </div>
    ) : (
        <div className="section-btn-container section-btn-container-non-selected-pro">
            <img src={props.icon} className="section-btn-icon-non-selected" alt=""/>
            <div className="section-btn-text-non-selected">{props.title}</div>
        </div>
    );
    const  isPro = !!props.pro;

    return (
        <>
            {isPro ? (
                proNav
            ) : (
                studNav
            )
            }
        </>
    );
}

export default SectionBtn;