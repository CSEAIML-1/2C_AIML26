import { Navigate, Route, Routes } from "react-router-dom";

import Ambulances from "./pages/Ambulances";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import FindHospital from "./pages/FindHospital";
import Hospitals from "./pages/Hospitals";
import MassCasualty from "./pages/MassCasualty";
import Referrals from "./pages/Referrals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/find-hospital" element={<FindHospital />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/ambulances" element={<Ambulances />} />
      <Route path="/referrals" element={<Referrals />} />
      <Route path="/mass-casualty" element={<MassCasualty />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;