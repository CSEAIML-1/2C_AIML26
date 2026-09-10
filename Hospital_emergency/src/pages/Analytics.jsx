import { ArrowUpRight, BarChart3, CalendarRange, TrendingUp } from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const metricCards = [
  { label: "Response time", value: "7.8m", change: "+12%" },
  { label: "Discharge flow", value: "91%", change: "+6%" },
  { label: "Transfer success", value: "96%", change: "+9%" },
];

function Analytics() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <section className="dashboard">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Performance metrics</p>
              <h1>Emergency Analytics</h1>
              <p>Analyze response efficiency, capacity usage, and network health.</p>
            </div>

            <button className="secondary-button" type="button">
              <CalendarRange size={15} />
              Last 30 days
            </button>
          </div>

          <div className="stats-grid" style={{ marginTop: "24px" }}>
            {metricCards.map((metric) => (
              <div className="stat-card success" key={metric.label}>
                <div className="stat-card-top">
                  <div className="stat-icon">
                    <TrendingUp size={18} />
                  </div>
                  <span className="stat-subtitle">{metric.change}</span>
                </div>
                <div className="stat-value">{metric.value}</div>
                <div className="stat-label">{metric.label}</div>
              </div>
            ))}
          </div>

          <section className="hospital-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Insights</p>
                <h2>System performance overview</h2>
              </div>
            </div>

            <div className="hospital-list" style={{ marginTop: "18px" }}>
              <div className="hospital-card">
                <div className="hospital-card-main">
                  <div className="hospital-status">
                    <span></span>
                    Improvement
                  </div>
                  <h3>Average emergency response</h3>
                  <div className="hospital-location">
                    <BarChart3 size={11} />
                    Reduced from 8.9 minutes to 7.8 minutes this month
                  </div>
                </div>

                <div className="hospital-card-side">
                  <div className="bed-count">
                    <strong>12%</strong>
                    <span>faster</span>
                  </div>

                  <button className="icon-button" type="button" aria-label="Open report">
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Analytics;
