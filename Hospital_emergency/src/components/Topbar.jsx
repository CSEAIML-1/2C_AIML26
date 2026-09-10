import {
  Bell,
  ChevronDown,
  Clock3,
  MapPin,
  Search,
} from "lucide-react";

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="location">
          <MapPin size={17} />
          <span>Delhi NCR</span>
          <ChevronDown size={15} />
        </div>

        <div className="network-time">
          <Clock3 size={16} />
          <span>Live Network</span>
        </div>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <Search size={17} />
          <input
            type="text"
            placeholder="Search hospitals, ambulances..."
          />
        </div>

        <button className="notification-btn">
          <Bell size={19} />
          <span className="notification-badge">4</span>
        </button>

        <div className="profile">
          <div className="profile-avatar">DR</div>

          <div className="profile-details">
            <strong>Dhruv Sharma</strong>
            <span>Administrator</span>
          </div>

          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}

export default Topbar;