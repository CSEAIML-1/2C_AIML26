import { useMemo, useState } from "react";
import { BedDouble, MapPin, Search, ShieldCheck } from "lucide-react";

import HospitalCard from "../components/HospitalCard";

const hospitals = [
  {
    name: "Apollo Hospital",
    location: "Sarita Vihar, Delhi",
    distance: "4.2 km",
    beds: 18,
    specialties: ["Trauma", "Cardiology", "ICU"],
    status: "Available",
  },
  {
    name: "Max Super Speciality",
    location: "Saket, New Delhi",
    distance: "7.8 km",
    beds: 9,
    specialties: ["Neurology", "Trauma", "ICU"],
    status: "Limited",
  },
  {
    name: "Fortis Escorts",
    location: "Okhla, New Delhi",
    distance: "9.1 km",
    beds: 0,
    specialties: ["Cardiology", "Emergency"],
    status: "At capacity",
  },
];

function FindHospital() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All hospitals");

  const filteredHospitals = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return hospitals.filter((hospital) => {
      const matchesQuery =
        !normalizedQuery ||
        `${hospital.name} ${hospital.location} ${hospital.specialties.join(" ")}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesStatus =
        status === "All hospitals" || hospital.status === status;

      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  return (
    <section className="hospital-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Referral network</p>
          <h2>Find a hospital</h2>
          <p>Locate emergency capacity and transfer-ready facilities.</p>
        </div>

        <button className="secondary-button" type="button">
          <MapPin size={16} />
          View map
        </button>
      </div>

      <div className="hospital-toolbar">
        <label className="hospital-search">
          <Search size={17} />
          <span className="sr-only">Search hospitals</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by hospital, area or specialty"
          />
        </label>

        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option>All hospitals</option>
          <option>Available</option>
          <option>Limited</option>
          <option>At capacity</option>
        </select>
      </div>

      <div className="hospital-list">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital) => (
            <HospitalCard hospital={hospital} key={hospital.name} />
          ))
        ) : (
          <div className="empty-state">
            <ShieldCheck size={22} />
            <strong>No hospitals found</strong>
            <span>Try a different search or availability filter.</span>
          </div>
        )}
      </div>

      <div className="capacity-note">
        <BedDouble size={16} />
        Capacity data refreshed less than a minute ago
      </div>
    </section>
  );
}

export default FindHospital;