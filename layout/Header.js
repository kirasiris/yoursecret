import { withRouter } from "next/router";
import Link from "next/link";
import { APP_NAME } from "@/config";
const Header = ({ router }) => {
	const isActive = (router, path) => {
		if (router.pathname === path) {
			return {
				backgroundColor: "#4c4c4c",
				"&:hover": {
					backgroundColor: "#a52a2a",
				},
			};
		}
	};
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
			<div className="container">
				<Link href="/" passHref>
					<a className="navbar-brand" style={isActive(router, `/`)}>
						<i className="fas fa-home" aria-hidden /> {APP_NAME}
					</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample02"
					aria-controls="navbarsExample02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarsExample02">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link href="/about" passHref>
								<a
									className="nav-link text-white"
									style={isActive(router, `/about`)}
								>
									About
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/male" passHref>
								<a
									className="nav-link text-white"
									style={isActive(router, `/male`)}
								>
									<i className="fas fa-mars" aria-hidden /> Male
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/female" passHref>
								<a
									className="nav-link text-white"
									style={isActive(router, `/female`)}
								>
									<i className="fas fa-venus" aria-hidden /> Female
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/other" passHref>
								<a
									className="nav-link text-white"
									style={isActive(router, `/other`)}
								>
									<i className="fas fa-genderless" aria-hidden /> Other
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/nsfw" passHref>
								<a
									className="nav-link text-white"
									style={isActive(router, `/nsfw`)}
								>
									<i className="fas fa-user-secret" aria-hidden /> NSFW
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default withRouter(Header);
