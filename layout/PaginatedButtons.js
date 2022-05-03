import { useState } from "react";
import Link from "next/link";
// ACTIONS
// HELPERS
import InfiniteScroll from "react-infinite-scroller";
// REACTBOOTSTRAP
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PaginatedButtons = ({
	objects = [],
	setObjects,
	paramsObject = {},
	totalDocuments = 0,
	nextParams = ``,
	prevParams = ``,
	next = 0,
	prev = 0,
	loadMoreParams = ``,
	loadMoreAction,
	totalDocumentsPerPage = 0,
	currentPage = 0,
	totalNumberOfPages = 0,
	infiniteMode = false,
	componentMapping,
	paginationMetaDataContainer = false,
	isNumericPagination = false,
	pageArray = [],
	router,
}) => {
	const [nextPage, setNextPage] = useState(next);
	const [skip, setSkip] = useState(0); // Load more button
	const [size, setSize] = useState(totalDocuments); // Load more button
	const [totalResults, setTotalResults] = useState(totalDocumentsPerPage);
	const [page, setPage] = useState(currentPage);
	const [totalPages, setTotalPages] = useState(totalNumberOfPages);
	const [arrayPages, setArrayPages] = useState(pageArray);

	const loadMore = async () => {
		const toSkip = Number(skip) + Number(paramsObject.limit);
		const params = nextPage
			? `${loadMoreParams}&page=${nextPage}&skip=${toSkip}`
			: `${loadMoreParams}&skip=${toSkip}`;
		const response = await loadMoreAction(params)();
		setObjects([...objects, ...response.data]);
		setSkip(toSkip);
		setSize(response.data.length);
		//setTotalResults([...objects.length, ...response.data.length]);
		setPage(response?.pagination?.current || 1);
		setTotalPages(response?.pagination?.totalpages || 0);
		setNextPage(response?.pagination?.next?.page || 0);
		setArrayPages(response?.pagination?.pages);
	};

	const nextButton = () => {
		return (
			next !== "undefined" &&
			next !== 0 && (
				<Button
					onClick={() => {
						router.push(nextParams);
					}}
					className={`page-link`}
				>
					Next Page
				</Button>
			)
		);
	};

	const prevButton = () => {
		return (
			prev !== "undefined" &&
			prev !== 0 && (
				<Button
					onClick={() => {
						router.push(prevParams);
					}}
					className={`page-link`}
				>
					Previous Page
				</Button>
			)
		);
	};

	const loadMoreButton = () => {
		return (
			size > 0 &&
			size >= paramsObject.limit &&
			next !== "undefined" &&
			next !== 0 && (
				<Button onClick={loadMore} className={`page-link`}>
					Load more
				</Button>
			)
		);
	};

	const numericPagination = () => {
		return (
			<ul className="pagination">
				<li className="page-item">{loadMoreButton()}</li>
				{/* FIRST/PREVIOUS */}
				<li className={`page-item first-item ${page === 1 && "diabled"}`}>
					<Link
						href={`${loadMoreParams.replace(
							`page=${page}`,
							(router.query.page = 1)
						)}`}
						passHref
					>
						<a className="page-link">First</a>
					</Link>
				</li>
				<li className={`page-item previous-item ${page === 1 && "disabled"}`}>
					{prevButton()}
				</li>
				{/* NUMERIC PAGINATION */}
				{arrayPages.map((p, index) => (
					<li
						key={index}
						className={`page-item number-item ${p === page ? `active` : ``}`}
					>
						<Link
							href={`${loadMoreParams.replace(`?page=${page}`, `?page=${p}`)}`}
							passHref
						>
							<a className={`page-link`}>{p}</a>
						</Link>
					</li>
				))}
				{/* LAST/NEXT */}
				<li
					className={`page-item next-item ${page === totalPages && "disabled"}`}
				>
					{nextButton()}
				</li>
				<li
					className={`page-item last-item ${page === totalPages && "disabled"}`}
				>
					<Link
						href={`${loadMoreParams.replace(
							`page=${page}`,
							(router.query.page = totalPages)
						)}`}
						passHref
					>
						<a className="page-link">Last</a>
					</Link>
				</li>
			</ul>
		);
	};

	const paginationMetaData = () => {
		return (
			!infiniteMode &&
			(paginationMetaDataContainer ? (
				<Col xl={`12`} lg={`12`}>
					Number of Items {totalResults}
					<div className={`float-right`}>
						{"Page " + page + " of " + totalPages}
					</div>
					<hr />
				</Col>
			) : (
				<>
					Number of Items {totalResults}
					<div className={`float-right`}>
						{"Page " + page + " of " + totalPages}
					</div>
					<hr />
				</>
			))
		);
	};

	return infiniteMode ? (
		<>
			<InfiniteScroll
				pageStart={0}
				loadMore={loadMore}
				hasMore={size > 0 && size >= paramsObject.limit}
				loader={
					<div className="loader" key={0}>
						Loading ...
					</div>
				}
			>
				{componentMapping}
			</InfiniteScroll>
			{paginationMetaData()}
		</>
	) : (
		<>
			{componentMapping}
			{paginationMetaData()}
			<div className={`paginationButtons`}>{numericPagination()}</div>
		</>
	);
};

export default PaginatedButtons;
