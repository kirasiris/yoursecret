import "@/css/app.css";
import "@/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SSRProvider } from "react-bootstrap";

const myApp = ({ Component, pageProps }) => {
	return (
		<SSRProvider>
			<Component {...pageProps} />
			<ToastContainer />
		</SSRProvider>
	);
};

export default myApp;
