import "./sidebar.css";
import {useState, useContext} from 'react';
import {userDataContext} from '../../App';
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



function Sidebar() {

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
  const [userData, setUserData] = useContext(userDataContext);
  let data = userData;
  console.log('contextData', data);
  if (userData.page) setActive(userData.page);

  return (
    <div className="sbar_wrapper">
      <div className="sbar_container">
        <div className="profile">
          <span className="welcome"> Welcome, {data.firstname} </span>
          <span className="email"> (data.email) </span>
        </div>
        <ul className="sbar_menu">
        <li onClick={() => { data.page = items[0]; setUserData(data)}}
            id={active === 'Dashboard' ? "selected": ""}>
            <FontAwesomeIcon icon={faChartLine} className="icon"/>
           Dashboard 
          </li>
          <li onClick={() => {data.page = items[1]; setUserData(data)}}
            id={active === 'Appointments' ? "selected": ""}>
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
            Appointments
          </li>
          <li onClick={() => {setActive(items[2])}}
              id={active === 'Medical Records' ? "selected": ""}>
            <FontAwesomeIcon icon={faFileMedical} className="icon" />
            Medical Records
          </li>
          <li onClick={() => {setActive(items[3])}}
              id={active === 'Teleconsultations' ? "selected": ""}>
            <FontAwesomeIcon icon={faVideo} className="icon" />
            Teleconsultations
          </li>
          <li onClick={() => {setActive(items[4])}}
              id={active === 'Prescriptions' ? "selected": ""}>
            <FontAwesomeIcon icon={faFilePrescription} className="icon" />
            Prescriptions
          </li>
          <li onClick={() => {setActive(items[5])}}
              id={active === 'Notifications' ? "selected": ""}>
            <FontAwesomeIcon icon={faBell} className="icon" />
            Notifications
          </li>
        </ul>
        <ul className="controls">
          <li onClick={() => {setActive(items[6])}}
              id={active === 'Settings' ? "selected": ""}>
            <FontAwesomeIcon icon={faCog} className="icon" />
            Settings
          </li>
          <li onClick={() => {setActive(items[7])}}
              id={active === 'Support' ? "selected": ""}>
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

