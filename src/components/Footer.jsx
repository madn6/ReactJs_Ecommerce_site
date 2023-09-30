import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
	const data = [
		{
			type: "Product",
			subTypes: [
				"Landing Page",
				"Features",
				"Documentation",
				"Referral Program",
				"Pricing",
			],
		},
		{
			type: "Services",
			subTypes: [
				"Documentation",
				"Design",
				"Themes",
				"Illustrations",
				"UI Kit",
			],
		},
		{
			type: "Company",
			subTypes: ["About", "Terms", "Privacy Policy", "Careers"],
		},
		{
			type: "More",
			subTypes: ["Documentation", "License", "Changelog"],
		},
	];
	const socialLinks = [
		<BsFacebook />,
		<BsInstagram />,
		<BsTwitter />,
		<BsLinkedin />,
	];

	return (
		<footer className="mx-3 py-3">
			<div className="brand__container">
				<div className="brand">
					<span>madN</span>
					<span className="dot">.</span>
				</div>
				<div className="description">
					Build modern and creative website with crealand
				</div>
				<ul className="social__links">
					{socialLinks.map((link, index) => (
						<li key={index}>{link}</li>
					))}
				</ul>
			</div>
			<div className="links">
				{data.map(({ type, subTypes }, index) => {
					return (
						<div className="link" key={index}>
							<h3 className="title">{type}</h3>
							<ul>
								{subTypes.map((type, index) => (
									<li key={index}>
										<a href="#">{type}</a>
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		</footer>
	);
}
