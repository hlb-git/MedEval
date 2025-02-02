import {useContext} from 'react';
import {userDataContext} from '../App';
import axios from 'axios';

function Dashboard() {
  const [userData, setUserData] = useContext(userDataContext);
  
	return(
		<>
      <h1> Under construction</h1>
		</>
	);
};

export default Dashboard;
