import { connect, styled, Head } from "frontity";

const events = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Find out if Disco Death Bots are performing near you." />
			</Head>

			<Container>
				<H1>Events</H1>
				<p>There are no events currently scheduled at this time.</p>
				<p>Please check back at a later time.</p>
			</Container>
		</>
	);
}

export default events;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	max-width: 800px;
	padding: 10px;
	margin: 0;
`;


const H1 = styled.h1`
	text-align: center;
`;