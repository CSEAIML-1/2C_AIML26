import {
  Activity,
  Ambulance,
  BarChart3,
  Building2,
  ChevronRight,
  HeartPulse,
  LayoutDashboard,
  Settings,
  ShieldAlert,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    to: "/",
  },
  {
    label: "Find Hospital",
    icon: HeartPulse,
    to: "/find-hospital",
  },
  {
    label: "Hospitals",
    icon: Building2,
    to: "/hospitals",
  },
  {
    label: "Ambulances",
    icon: Ambulance,
    to: "/ambulances",
  },
  {
    label: "Referrals",
    icon: Activity,
    to: "/referrals",
  },
  {
    label: "Mass Casualty",
    icon: ShieldAlert,
    to: "/mass-casualty",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    to: "/analytics",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <HeartPulse size={22} strokeWidth={2.5} />
        </div>

        <div>
          <h2>EmergencyNet</h2>
          <span>Smart Referral Network</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">COMMAND CENTER</p>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
                key={item.label}
                to={item.to}
              >
                {({ isActive }) => (
                  <>
                    <Icon size={19} />
                    <span>{item.label}</span>
                    {isActive && <ChevronRight size={17} />}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button className="nav-item" type="button">
          <Users size={19} />
          <span>Network Users</span>
        </button>

        <button className="nav-item" type="button">
          <Settings size={19} />
          <span>Settings</span>
        </button>

        <div className="operator-card">
          <div className="operator-avatar">DR</div>

          <div className="operator-info">
            <strong>Network Admin</strong>
            <span>Online</span>
          </div>

          <span className="online-dot"></span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;