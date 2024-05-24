import './UserInfo.css'

function UserInfo() {
    return (
        <div className="user-info-base rounderCorn dropShadow">
            <p className="user-info-stats-title">Personal Details</p>
            <div className="user-info-stats-container">
                <label className="pname">Prénom:</label>
                <input type="text" id="fname" name="prenom" value={user.prenom} placeholder="Votre Prénom"/><br/><br/>
                <div className="styloniw1"></div>
                <label className="nname">Nom</label>
                <input type="text" id="lname1" name="nom" value={user.nom} placeholder="Votre Nom"/><br/><br/>
                <div className="styloniw2"></div>
                <label className="ename">Email</label>
                <input type="text" id="lname2" name="email" value={user.email} placeholder="Votre Email@outlook.com"/><br/><br/>
                <div className="styloniw3"></div>
                <label className="tname">Téléphone</label>
                <input type="text" id="lname3" name="phone" value={user.phone} placeholder="Votre Téléphone"/><br/><br/>
                <div className="styloniw4"></div>
                <input type="submit" value="Modifier"/>
            </div>
        </div>
    );
}

export default UserInfo;