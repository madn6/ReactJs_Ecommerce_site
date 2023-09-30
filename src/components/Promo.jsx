import React from "react";
import promo from "../assets/promo.png";

export default function Promo() {
	return (
		<div className="promo__container" > 
			<div className="container mx-3 py-3">
				<div className="content" id="help">
					<div className="title__container" >
						<h2>Never Miss a Promo</h2>
						<p>
							We always give our customers a promo for free subscribe to
							us
						</p>
					</div>
					<div className="subscribe__container">
						<input type="email" placeholder="yourname@gmail.com" />
						<button>Subscribe</button>
					</div>
				</div>
				<div className="promo__image">
					<img src={promo} alt="promo" />
				</div>
			</div>
		</div>
	);
}
