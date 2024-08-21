import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./component/Footer/Footer.jsx";
import DownloadApp from "./component/Sections/DownloadApp/DownloadApp.jsx";
// import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
