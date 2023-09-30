import React, { useState, useEffect } from "react";
import { ImSun } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsFillMoonFill } from "react-icons/bs";

export default function Navbar({ changeTheme, currentTheme }) {
	const [navState, setNavState] = useState(false);
	const html = document.querySelector("html");
	html.addEventListener("click", () => setNavState(false));

	return (
		<nav>
			<div className="container py-3 mx-3">
				<div className="brand">
					<span>madN</span>
					<div className="span dot">.</div>
				</div>
				<div
					className="links__container"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="toggle">
						{navState ? (
							<IoMdClose onClick={() => setNavState(false)} />
						) : (
							<GiHamburgerMenu
								onClick={(e) => {
									e.stopPropagation();
									setNavState(true);
								}}
							/>
						)}
						<div onClick={changeTheme}>
							{currentTheme === "dark" ? (
								<ImSun className="sun" />
							) : (
								<BsFillMoonFill className="moon" />
							)}
						</div>
					</div>
					<div className={`links ${navState ? "responsive__toggle" : ""}`}>
						<ul>
							<li>
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#categories">Categories</a>
							</li>
							<li>
								<a href="#products">Products</a>
							</li>
							<li>
								<a href="#recommended">Recommended</a>
							</li>
							<li>
								<a href="#help">Help</a>
							</li>
							<li onClick={changeTheme} className="color__mode">
								{currentTheme === "dark" ? (
									<ImSun className="sun" />
								) : (
									<BsFillMoonFill className="moon" />
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
