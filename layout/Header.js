import Link from "next/link";
import { APP_NAME } from "@/config";
const Header = () => {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
			<div className="container">
				<Link href="/" passHref>
					<a className="navbar-brand">
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
							<Link href="/male" passHref>
								<a className="nav-link text-white">
									<i className="fas fa-mars" /> Male
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/female" passHref>
								<a className="nav-link text-white">
									<i className="fas fa-venus" /> Female
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/other" passHref>
								<a className="nav-link text-white">
									<i className="fas fa-genderless" /> Other
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/nsfw" passHref>
								<a className="nav-link text-white">
									<i className="fas fa-user-secret" /> NSFW
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
