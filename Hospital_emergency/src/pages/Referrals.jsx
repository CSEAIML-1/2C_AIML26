import { ArrowRightLeft, ClipboardList, HeartHandshake, TrendingUp } from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const referrals = [
  { from: "Emergency Ward 3", to: "Apollo Hospital", priority: "Critical", mode: "Air+Road" },
  { from: "Community Clinic", to: "Fortis Escorts", priority: "High", mode: "Road" },
  { from: "Primary Center", to: "AIIMS Trauma", priority: "Medium", mode: "Road" },
  { from: "Private Practice", to: "Max Super Speciality", priority: "Low", mode: "Transfer" },
];

function Referrals() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <section className="dashboard">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Clinical handoff</p>
              <h1>Referral Queue</h1>
              <p>Monitor patient transfers and receiving-facility acceptance.</p>
            </div>

            <div className="system-status">
              <span className="status-dot"></span>
              12 pending referrals
            </div>
          </div>

          <div className="stats-grid" style={{ marginTop: "24px" }}>
            <div className="stat-card danger">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <HeartHandshake size={18} />
                </div>
                <span className="stat-subtitle">Critical</span>
              </div>
              <div className="stat-value">04</div>
              <div className="stat-label">Urgent transfers</div>
            </div>

            <div className="stat-card success">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <ClipboardList size={18} />
                </div>
                <span className="stat-subtitle">Accepted</span>
              </div>
              <div className="stat-value">19</div>
              <div className="stat-label">This week</div>
            </div>

            <div className="stat-card warning">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <TrendingUp size={18} />
                </div>
                <span className="stat-subtitle">Flow</span>
              </div>
              <div className="stat-value">92%</div>
              <div className="stat-label">Transfer success</div>
            </div>
          </div>

          <section className="hospital-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Operations</p>
                <h2>Active referrals</h2>
              </div>
            </div>

            <div className="hospital-list" style={{ marginTop: "18px" }}>
              {referrals.map((referral) => (
                <div className="hospital-card" key={`${referral.from}-${referral.to}`}>
                  <div className="hospital-card-main">
                    <div className="hospital-status">
                      <span></span>
                      {referral.priority}
                    </div>

                    <h3>{referral.from}</h3>

                    <div className="hospital-location">
                      <ArrowRightLeft size={11} />
                      {referral.to}
                      <span>{referral.mode}</span>
                    </div>
                  </div>

                  <div className="hospital-card-side">
                    <div className="bed-count">
                      <strong>{referral.priority}</strong>
                      <span>Priority</span>
                    </div>

                    <button className="icon-button" type="button" aria-label="Referral details">
                      <ClipboardList size={15} />
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

export default Referrals;
