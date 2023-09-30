import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import home from "../assets/home.png";

export default function Home() {
	return (
		<div className="home" >
			<div className="container mx-3 py-3">
				{/* title container  */}
				<div className="title__container" id="home">
					<h2>Brows Million Products for your needs</h2>
					<div className="input__container">
						<input type="text" placeholder="I want to buy" />
						<div className="icon">
							<AiOutlineSearch />
						</div>
					</div>
				</div>
				{/* end of title container */}
				<div className="extra__image">
					<img src={home} alt="Home" />
				</div>
			</div>
		</div>
	);
}
