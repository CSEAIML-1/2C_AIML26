import {
  Ambulance,
  Building2,
  HeartPulse,
  Siren,
} from "lucide-react";

import FindHospital from "./FindHospital";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Topbar from "../components/Topbar";

function Dashboard() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <section className="dashboard">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Emergency Network</p>

              <h1>Emergency Control Center</h1>

              <p>
                Monitor hospitals, ambulances and emergency capacity in real
                time.
              </p>
            </div>

            <div className="system-status">
              <span className="status-dot"></span>
              System Operational
            </div>
          </div>

          <div className="stats-grid">
            <StatCard
              icon={<Siren size={18} />}
              label="Active Emergencies"
              value="128"
              subtitle="+12 today"
              variant="danger"
            />

            <StatCard
              icon={<Building2 size={18} />}
              label="Hospitals Online"
              value="42"
              subtitle="98% network"
              variant="success"
            />

            <StatCard
              icon={<Ambulance size={18} />}
              label="Ambulances Available"
              value="17"
              subtitle="6 ALS units"
              variant="warning"
            />

            <StatCard
              icon={<HeartPulse size={18} />}
              label="Critical Patients"
              value="24"
              subtitle="8 awaiting transfer"
              variant="danger"
            />
          </div>

          <FindHospital />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;