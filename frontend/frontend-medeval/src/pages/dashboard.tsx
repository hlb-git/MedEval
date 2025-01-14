import Sidebar from "../components/sidebar/sidebar.tsx";
import {useLocation} from 'react-router-dom';


function Dashboard() {
  const {data} = useLocation().state; 
	return(
		<>
			<div>
                <Sidebar data={data}/>
			</div>
		</>
	);

};

export default Dashboard;
