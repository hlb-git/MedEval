import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
  useLocation
} from "react-router-dom";

import Auth from "./pages/auth";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar/sidebar";

function Layout() {

  const noSidebarRoutes: string[] = ["/", "/auth"];
  const location = useLocation();
  const sidebarVisible: boolean = !noSidebarRoutes.includes(
    location.pathname);

  return (
    <div style={{ display: "flex" , margin: 0, padding: 0}}>
    {sidebarVisible && <Sidebar />}
      <div style={{flex: 1, padding: "20px"}}>
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
  return (
    <Router>
      <Layout/>
    </Router>
  )
}
export default App;
