import Sidebar from "../components/sidebar/sidebar.tsx";
import {useLocation} from 'react-router-dom';


function Dashboard() {
  const {response} = useLocation().state; 
	return(
		<>
			<div>
                <Sidebar data={response}/>
			</div>
		</>
	);

};

export default Dashboard;
