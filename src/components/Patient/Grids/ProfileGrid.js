import './ProfileGrid.css'

function ProfileGrid(props){
    return (
        <div className="grid-container-profile">
            {props.children}
        </div>
    );
}

export default ProfileGrid;