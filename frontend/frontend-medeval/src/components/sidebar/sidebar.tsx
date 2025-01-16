import "./sidebar.css";
import {useState} from 'react';
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

  const items= [
    'Dashboard', 
    'Appointments',
    'Medical Records',
    'Teleconsultations',
    'Prescriptions',
    'Notifications',
    'Settings',
    'Support'
  ];
const [active, setActive] = useState(items[0]);
function Sidebar({data}: {data: {[key: string]: any}}) {

  return (
    <div className="sbar_wrapper">
      <div className="sbar_container">
        <div className="profile">
          <span className="welcome"> Welcome, {data.firstname} </span>
          <span className="email"> {data.email} </span>
        </div>
        <ul className="sbar_menu">
        <li onClick={() => {setActive(items[0])}}
            id={data.page === 'Dashboard' ? "selected": ""}>
            <FontAwesomeIcon icon={faChartLine} className="icon"/>
           Dashboard 
          </li>
          <li id={data.page === 'Appointments' ? "selected": ""}>
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
            Appointments
          </li>
          <li id={data.page === 'Medical Records' ? "selected": ""}>
            <FontAwesomeIcon icon={faFileMedical} className="icon" />
            Medical Records
          </li>
          <li id={data.page === 'Teleconsultations' ? "selected": ""}>
            <FontAwesomeIcon icon={faVideo} className="icon" />
            Teleconsultations
          </li>
          <li id={data.page === 'Prescriptions' ? "selected": ""}>
            <FontAwesomeIcon icon={faFilePrescription} className="icon" />
            Prescriptions
          </li>
          <li id={data.page === 'Notifications' ? "selected": ""}>
            <FontAwesomeIcon icon={faBell} className="icon" />
            Notifications
          </li>
        </ul>
        <ul className="controls">
          <li id={data.page === 'Settings' ? "selected": ""}>
            <FontAwesomeIcon icon={faCog} className="icon" />
            Settings
          </li>
          <li id={data.page === 'Support' ? "selected": ""}>
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

