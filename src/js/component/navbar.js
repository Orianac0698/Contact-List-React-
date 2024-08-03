import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="">
		<nav className="container navbar navbar-gray bg-aliceblue mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/Create">
					<button className="btn btn-primary">Create contacts</button>
				</Link>
			</div>
		</nav>
		</div>

	);
};
