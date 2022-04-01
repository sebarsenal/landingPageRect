import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron titulo="" />
			<div className="row">
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
