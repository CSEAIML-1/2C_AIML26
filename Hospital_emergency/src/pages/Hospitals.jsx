import { Activity, BedDouble, Building2, MapPin, Plus } from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const hospitalDirectory = [
  {
    name: "Apollo Hospital",
    area: "Sarita Vihar",
    capacity: "18 beds available",
    status: "Available",
    specialty: "Trauma & ICU",
  },
  {
    name: "Max Super Speciality",
    area: "Saket",
    capacity: "9 beds available",
    status: "Limited",
    specialty: "Neuro & Cardio",
  },
  {
    name: "Fortis Escorts",
    area: "Okhla",
    capacity: "At capacity",
    status: "Full",
    specialty: "Emergency Care",
  },
  {
    name: "AIIMS Trauma Center",
    area: "Ansari Nagar",
    capacity: "26 beds available",
    status: "Available",
    specialty: "Surgery & ICU",
  },
];

function Hospitals() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <section className="dashboard">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Network status</p>
              <h1>Hospital Directory</h1>
              <p>Track bed capacity, specializations, and active admissions.</p>
            </div>

            <button className="secondary-button" type="button">
              <Plus size={15} />
              Add hospital
            </button>
          </div>

          <div className="stats-grid" style={{ marginTop: "24px" }}>
            <div className="stat-card success">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Building2 size={18} />
                </div>
                <span className="stat-subtitle">Live</span>
              </div>
              <div className="stat-value">42</div>
              <div className="stat-label">Facilities online</div>
            </div>

            <div className="stat-card warning">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <BedDouble size={18} />
                </div>
                <span className="stat-subtitle">Today</span>
              </div>
              <div className="stat-value">314</div>
              <div className="stat-label">Beds available</div>
            </div>

            <div className="stat-card danger">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Activity size={18} />
                </div>
                <span className="stat-subtitle">Critical</span>
              </div>
              <div className="stat-value">08</div>
              <div className="stat-label">ICU occupancy alerts</div>
            </div>
          </div>

          <section className="hospital-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Referral network</p>
                <h2>Available facilities</h2>
              </div>
            </div>

            <div className="hospital-list" style={{ marginTop: "18px" }}>
              {hospitalDirectory.map((hospital) => (
                <div className="hospital-card" key={hospital.name}>
                  <div className="hospital-card-main">
                    <div
                      className={`hospital-status ${
                        hospital.status === "Limited"
                          ? "limited"
                          : hospital.status === "Full"
                            ? "at-capacity"
                            : ""
                      }`}
                    >
                      <span></span>
                      {hospital.status}
                    </div>

                    <h3>{hospital.name}</h3>

                    <div className="hospital-location">
                      <MapPin size={11} />
                      {hospital.area}
                      <span>{hospital.specialty}</span>
                    </div>
                  </div>

                  <div className="hospital-card-side">
                    <div className="bed-count">
                      <strong>{hospital.capacity.split(" ")[0]}</strong>
                      <span>{hospital.capacity.replace(/^[^\s]+\s/, "")}</span>
                    </div>

                    <button className="icon-button" type="button" aria-label="Hospital details">
                      <Building2 size={15} />
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

export default Hospitals;
