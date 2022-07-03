import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<script
						src="https://kit.fontawesome.com/4cde37f226.js"
						crossOrigin="anonymous"
					></script>
					<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
					<script
						src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
						integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
						crossOrigin="anonymous"
						async
					></script>
					<meta property="fb:app_id" content="258442714877712" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
