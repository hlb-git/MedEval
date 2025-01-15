import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine,
  faCalendarCheck,
  faFileMedical,
  faVideo,
  faFilePrescription,
  faBell,
  faCog,
  faQuestionCircle,
  faSignOutAlt, 
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({data}: {data: {[key: string]: any}}) {
  return (
    <div className="sbar_wrapper">
      <div className="sbar_container">
        <div className="profile">
          <span className="welcome"> Welcome, {data.firstname} </span>
          <span className="email"> {data.email} </span>
        </div>
        <ul className="sbar_menu">
        <li id={data.page === 'Dashboard' ? "selected": ""}>
            <FontAwesomeIcon icon={faChartLine} className="icon"/>
           Dashboard 
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
            Appointments
          </li>
          <li>
            <FontAwesomeIcon icon={faFileMedical} className="icon" />
            Medical Records
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} className="icon" />
            Teleconsultations
          </li>
          <li>
            <FontAwesomeIcon icon={faFilePrescription} className="icon" />
            Prescriptions
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} className="icon" />
            Notifications
          </li>
        </ul>
        <ul className="controls">
          <li>
            <FontAwesomeIcon icon={faCog} className="icon" />
            Settings
          </li>
          <li>
            <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
            Support
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            Logout
          </li>
          </ul>
      </div>
    </div>
  )
}

export default Sidebar;

