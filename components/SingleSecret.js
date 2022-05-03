import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";

const SingleSecret = ({ secret }) => {
	// Declare Sex
	let sexo = "";
	let classes = "";
	let offensive_text = text;

	if (secret.sex === "male") {
		classes = "bg-primary text-center text-white " + secret._id;
		sexo = <i className="fas fa-mars" />;
	} else if (secret.sex === "female") {
		classes = "bg-danger text-center text-white " + secret._id;
		sexo = <i className="fas fa-venus" />;
	} else {
		classes = "bg-info text-center text-white " + secret._id;
		sexo = <i className="fas fa-genderless" />;
	}
	// Declare NSFW
	let not_safe_for_work = "";
	if (secret.nsfw === "yes") {
		offensive_text = "Warning, this is NSFW";

		not_safe_for_work = <i className="fas fa-user-secret" />;
	}
	return (
		<article>
			<Card className={classes}>
				<Card.Header>
					<span className="badge age badge-light">{not_safe_for_work}</span>

					<span className="badge sex badge-secondary">{sexo}</span>
					<br />
				</Card.Header>
				<Card.Body>
					<figure>
						<blockquote className="blockquote">
							{/* {showIncognito ? <p>{offensive_text}</p> : <p>{secret.text}</p>} */}
							<p>{secret.text}</p>
						</blockquote>
						<figcaption className="blockquote-footer text-white">
							<cite title="Source date">- {secret.createdAt}</cite>
						</figcaption>
					</figure>
				</Card.Body>
			</Card>
		</article>
	);
};

export default SingleSecret;
