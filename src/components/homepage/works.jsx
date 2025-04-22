import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./midd-logo.png"
								alt="Middlebury College logo, a dark blue shield with an open book, a globe, chapel, and the year the college was founded, 1800."
								className="work-image"
							/>
							<div className="work-title">Middlebury College</div>
							<div className="work-subtitle">
								Full Stack Software Developer
							</div>
							<div className="work-duration">September 2024 - Now</div>
						</div>
						<div className="work">
							<img
								src="./app-academy-logo.png"
								alt="app academy logo"
								className="work-image"
							/>
							<div className="work-title">App Academy</div>
							<div className="work-subtitle">
								Full Stack Software Engineer
							</div>
							<div className="work-duration">March 2023 - May 2024</div>
						</div>

						<div className="work">
							<img
								src="./trajector-logo.jpg"
								alt="trajector services logo - company assisting veterans in gaining benefits"
								className="work-image"
							/>
							<div className="work-title">Trajector Services</div>
							<div className="work-subtitle">
								CRM Developer II
							</div>
							<div className="work-duration">May 2020 - February 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
