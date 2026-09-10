import { AlertTriangle, Hospital, ShieldAlert, Users } from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const incidents = [
  { name: "Road collision", location: "NH-48 Exit 9", casualties: 14, status: "Response active" },
  { name: "Industrial blast", location: "Bawana Industrial Area", casualties: 22, status: "Mass alert" },
  { name: "Fire incident", location: "Dwarka Sector 12", casualties: 08, status: "Stabilizing" },
];

function MassCasualty() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <section className="dashboard">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Disaster response</p>
              <h1>Mass Casualty Operations</h1>
              <p>Coordinate triage, hospital surges, and emergency field support.</p>
            </div>

            <div className="system-status">
              <span className="status-dot"></span>
              03 active incident zones
            </div>
          </div>

          <div className="stats-grid" style={{ marginTop: "24px" }}>
            <div className="stat-card danger">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <AlertTriangle size={18} />
                </div>
                <span className="stat-subtitle">Critical</span>
              </div>
              <div className="stat-value">44</div>
              <div className="stat-label">Patients triaged</div>
            </div>

            <div className="stat-card warning">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Users size={18} />
                </div>
                <span className="stat-subtitle">Field</span>
              </div>
              <div className="stat-value">12</div>
              <div className="stat-label">Teams deployed</div>
            </div>

            <div className="stat-card success">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Hospital size={18} />
                </div>
                <span className="stat-subtitle">Capacity</span>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-label">Hospitals ready</div>
            </div>
          </div>

          <section className="hospital-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Incident board</p>
                <h2>Open disaster events</h2>
              </div>
            </div>

            <div className="hospital-list" style={{ marginTop: "18px" }}>
              {incidents.map((incident) => (
                <div className="hospital-card" key={incident.name}>
                  <div className="hospital-card-main">
                    <div className="hospital-status">
                      <span></span>
                      {incident.status}
                    </div>

                    <h3>{incident.name}</h3>

                    <div className="hospital-location">
                      <ShieldAlert size={11} />
                      {incident.location}
                    </div>
                  </div>

                  <div className="hospital-card-side">
                    <div className="bed-count">
                      <strong>{incident.casualties}</strong>
                      <span>Casualties</span>
                    </div>

                    <button className="icon-button" type="button" aria-label="Incident response details">
                      <AlertTriangle size={15} />
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

export default MassCasualty;
