import Link from "next/link";
import { APP_NAME, KEVINFONSECA_URL } from "@/config";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
						<p className="pt-10 pb-10 m-0">
							<Link href="/">{APP_NAME}</Link>
							<i className="fa fa-code" id="fa-code" aria-hidden /> made with
							<i className="fa fa-heart" aria-hidden id="fa-heart" />
							&#38; &#9749; by{" "}
							<a
								href={KEVINFONSECA_URL}
								target="_blank"
								rel="noopener noreferrer"
							>
								Kevin
							</a>
						</p>
					</div>
				</div>
			</div>
			<a href="#Top" name="Top" id="Top" className="btn btn-light cd-top">
				Back to Top
			</a>
		</div>
	);
};

export default Footer;
