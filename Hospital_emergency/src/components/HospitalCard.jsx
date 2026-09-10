import { ArrowUpRight, BedDouble, MapPin } from "lucide-react";

function HospitalCard({ hospital }) {
	return (
		<article className="hospital-card">
			<div className="hospital-card-main">
				<div className={`hospital-status ${hospital.status.toLowerCase().replace(" ", "-")}`}>
					<span />
					{hospital.status}
				</div>
				<h3>{hospital.name}</h3>
				<p className="hospital-location">
					<MapPin size={14} />
					{hospital.location}
					<span>{hospital.distance}</span>
				</p>
				<div className="specialty-list">
					{hospital.specialties.map((specialty) => (
						<span key={specialty}>{specialty}</span>
					))}
				</div>
			</div>

			<div className="hospital-card-side">
				<div className="bed-count">
					<BedDouble size={17} />
					<strong>{hospital.beds}</strong>
					<span>open beds</span>
				</div>
				<button className="icon-button" type="button" aria-label={`Open ${hospital.name}`}>
					<ArrowUpRight size={18} />
				</button>
			</div>
		</article>
	);
}

export default HospitalCard;
