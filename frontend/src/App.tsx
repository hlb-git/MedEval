import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
  useLocation
} from "react-router-dom";

import {createContext, useState} from 'react';
import './App.css'
import Auth from "./pages/auth";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar/sidebar";

interface UserData{
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
  page?: string;
}

export const userDataContext = createContext<
  [UserData, React.Dispatch<React.SetStateAction<UserData>>]
>([{}, () => {}]);

function Layout() {

  const noSidebarRoutes: string[] = ["/", "/auth"];
  const location = useLocation();
  const sidebarVisible: boolean = !noSidebarRoutes.includes(
    location.pathname
  );

  return (
    <div style={{ display: "flex" , background: "#F4F5F9"}}>
    {sidebarVisible && <Sidebar />}
      <div style={{flex: 1}}>
      <Routes>
        <Route path="/" element={
            <Home />
          } />
        <Route path="/dashboard" element={
          <Dashboard />}/>
        <Route path="/auth" element={
          <Auth />} />
      </Routes>
      </div>
    </div>
  );
}


function App() {
  const [userData, setUserData] = useState({});
  return (
    <userDataContext.Provider value={[userData, setUserData]}>
      <Router>
        <Layout/>
      </Router>
    </userDataContext.Provider>
  )
}
export default App;
