import "./sidebar.css";

function Sidebar() {
    return (
        <div className="sbar_wrapper">
            <div className="sbar_container">
                <ul className="sbar_menu">
                    <li> Dashboard </li>
                    <li key="Appointments"> Appointments</li>
                    <li key="Medical Records"> Medical Records</li>
                    <li key="Teleconsultations"> Teleconsultations</li>
                    <li key="Prescriptions"> Prescriptions</li>
                    <li key="Notifications"> Notifications</li>
                </ul>
                <ul className="controls">
                    <li key="Settings"> Settings</li>
                    <li key="Support"> Support</li>
                    <li key="Logout"> Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;

