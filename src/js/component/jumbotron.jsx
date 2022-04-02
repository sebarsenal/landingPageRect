import React from "react";

function Jumbotron(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.titulo}</h1>
			<p className="lead">{props.desc}</p>
			<hr className="my-4" />
			<p>{props.desc2}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href={props.url}
					role="button">
					{props.label}
				</a>
			</p>
		</div>
	);
}

export default Jumbotron;
