import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Coverage from "./pages/Coverage";
import Tools from "./pages/Tools";
import OSPM from "./pages/OSPM";
import SSPM from "./pages/SSPM";
import Frameworks from "./pages/Frameworks";
import CSPM from "./pages/CSPM";


const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/coverage" element={<Coverage/>} />
        <Route path="/tools" element={<Tools/>} />
        <Route path="/ospm" element={<OSPM/>} />
        <Route path="/sspm" element={<SSPM/>} />
        <Route path="/cspm" element={<CSPM/>} />
        <Route path="/frameworks" element={<Frameworks/>} />
      </Routes>
    </div>
  );
};

export default App;
