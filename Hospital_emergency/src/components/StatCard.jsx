function StatCard({ icon, label, value, subtitle, variant = "default" }) {
  return (
    <div className={`stat-card ${variant}`}>
      <div className="stat-card-top">
        <div className="stat-icon">
          {icon}
        </div>

        <span className="stat-subtitle">{subtitle}</span>
      </div>

      <div className="stat-value">{value}</div>

      <div className="stat-label">{label}</div>
    </div>
  );
}

export default StatCard;