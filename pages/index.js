import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { getSecrets } from "@/actions/secret";
import Layout from "@/layout/Layout";
import SecretForm from "@/layout/SecretForm";
import Content from "@/layout/Container";
import NothingFoundAlert from "@/layout/NothingFoundAlert";
import SingleSecret from "@/components/SingleSecret";
import Row from "react-bootstrap/Row";

export const getServerSideProps = async (context) => {
	const params = ``;
	const secrets = (await getSecrets(params)()) || [];
	const totalPages = secrets?.pagination?.totalpages || 0;
	const totalResults = secrets?.count || 0;
	const page = secrets?.pagination?.current || 1;
	const next = secrets?.pagination?.next?.page || 0;
	const prev = secrets?.pagination?.prev?.page || 0;
	const paramsObject = context.query;

	return {
		props: {
			params: params,
			serverSecrets: secrets?.data || [],
			totalDocuments: secrets?.countAll || 0,
			totalPages: totalPages,
			totalResults: totalResults,
			page: page,
			next: next,
			prev: prev,
			paramsObject: paramsObject,
		},
	};
};

const Index = ({
	params,
	serverSecrets,
	totalDocuments,
	totalPages,
	totalResults,
	page,
	next,
	prev,
	paramsObject,
	router,
}) => {
	const [secrets, setSecrets] = useState([]);
	useEffect(() => {
		setSecrets(serverSecrets);
	}, [params]);
	return (
		<Layout title="Home">
			<SecretForm objects={secrets} setObjects={setSecrets} />
			<Row
				data-masonry={{ percentPosition: true }}
				style={{ position: "unset" }}
			>
				{secrets?.length > 0 ? (
					secrets.map((secret, index) => (
						<SingleSecret key={secret._id} secret={secret} />
					))
				) : (
					<NothingFoundAlert />
				)}
			</Row>
		</Layout>
	);
};

export default withRouter(Index);
