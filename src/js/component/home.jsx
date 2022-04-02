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
			<Jumbotron
				titulo="Six Marathon Majors"
				url="https://www.worldmarathonmajors.com/"
				label="Ir al sitio"
				desc="Es una competición internacional de atletismo creada en 2006 que agrupa las seis más importantes maratones anuales del mundo Boston, Londres, Berlín, Chicago, Nueva York y Tokio"
				desc2="Visita la web para conocer más al respecto"
			/>
			<div className="row">
				<Card
					titulo="Berlin"
					label="Ir al sitio"
					title="Berlin Marathon"
					text="Alemania - Europa"
					url="https://www.bmw-berlin-marathon.com/en/"
					img="https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
				/>
				<Card
					titulo="Chicago"
					label="Ir al sitio"
					title="Chicago Marathon"
					text="USA - Norte América"
					url="https://www.chicagomarathon.com/apply/"
					img="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
				/>
				<Card
					titulo="New York"
					label="Ir al sitio"
					url="https://www.nyrr.org/tcsnycmarathon"
					title="New York Marathon"
					text="USA - Norte América"
					img="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
				/>
				<Card
					titulo="Boston"
					label="Ir al sitio"
					url="https://www.baa.org/"
					title="Boston Marathon"
					text="USA - Norte América"
					img="https://images.unsplash.com/photo-1506551907304-60bb62ffc9b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
				/>
				<Card
					titulo="Tokyo"
					label="Ir al sitio"
					url="https://www.marathon.tokyo/en/"
					title="Tokyo Marathon"
					text="Japón - Asia"
					img="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
				/>
				<Card
					titulo="Londres"
					label="Ir al sitio"
					url="https://www.tcslondonmarathon.com/"
					title="London Marathon"
					text="Inglaterra - Europa"
					img="https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
				/>
			</div>
		</div>
	);
};

export default Home;
