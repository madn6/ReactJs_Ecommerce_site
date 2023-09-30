import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import Catagory from "./components/Catagories";
import Catagories from "./components/Catagories";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Choose from "./components/Choose";
import Product from "./components/Products";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";

export default function App() {
	const [theme, setTheme] = useState("dark");
	const changeTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};
	useEffect(() => {
		const registerAnimation = () => {
			const sr = ScrollReveal({
				origin: "bottom",
				distance: "80px",
				duration: 1000,
				reset: false,
			});
			sr.reveal(
				`nav,.home,.service__container,.catagories_container,.recommend__container,.choose__us-container,.products__container,.promo__container,footer`,
				{
					interval: 500,
				}
			);
		};
		registerAnimation();
	});

	window.setTimeout(() => {
		const home = document.getElementsByClassName("home");
		home[0].style.transform = "none";
	}, 1500);

	return (
		<div className="app" data-theme={theme}>
			<ScrollToTop />
			<Navbar changeTheme={changeTheme} currentTheme={theme} />
			<Home />
			<Services />
			<Catagories />
			<Recommend />
			<Choose />
			<Product />
			<Promo />
			<Footer />
		</div>
	);
}
