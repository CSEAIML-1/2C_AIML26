import { Ambulance, Clock3, Gauge, MapPinned, Route } from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const fleet = [
  { id: "AMB-104", route: "Saket to AIIMS", eta: "4 min", status: "En route" },
  { id: "AMB-221", route: "Dwarka to Fortis", eta: "9 min", status: "On scene" },
  { id: "AMB-330", route: "Lajpat Nagar to Apollo", eta: "3 min", status: "Ready" },
  { id: "AMB-417", route: "Rohini to Max", eta: "11 min", status: "Staged" },
];

function Ambulances() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <section className="dashboard">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Emergency fleet</p>
              <h1>Ambulance Coordination</h1>
              <p>Monitor live dispatch, availability, and arrival status.</p>
            </div>

            <div className="system-status">
              <span className="status-dot"></span>
              17 units active
            </div>
          </div>

          <div className="stats-grid" style={{ marginTop: "24px" }}>
            <div className="stat-card danger">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Ambulance size={18} />
                </div>
                <span className="stat-subtitle">Dispatch</span>
              </div>
              <div className="stat-value">06</div>
              <div className="stat-label">Active emergencies</div>
            </div>

            <div className="stat-card success">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Gauge size={18} />
                </div>
                <span className="stat-subtitle">Response</span>
              </div>
              <div className="stat-value">7.8</div>
              <div className="stat-label">Minutes avg</div>
            </div>

            <div className="stat-card warning">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Clock3 size={18} />
                </div>
                <span className="stat-subtitle">Standby</span>
              </div>
              <div className="stat-value">04</div>
              <div className="stat-label">Units ready</div>
            </div>
          </div>

          <section className="hospital-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Live fleet</p>
                <h2>Vehicle status board</h2>
              </div>
            </div>

            <div className="hospital-list" style={{ marginTop: "18px" }}>
              {fleet.map((unit) => (
                <div className="hospital-card" key={unit.id}>
                  <div className="hospital-card-main">
                    <div className="hospital-status">
                      <span></span>
                      {unit.status}
                    </div>

                    <h3>{unit.id}</h3>

                    <div className="hospital-location">
                      <MapPinned size={11} />
                      {unit.route}
                    </div>
                  </div>

                  <div className="hospital-card-side">
                    <div className="bed-count">
                      <strong>{unit.eta.split(" ")[0]}</strong>
                      <span>ETA</span>
                    </div>

                    <button className="icon-button" type="button" aria-label="Track vehicle">
                      <Route size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Ambulances;
